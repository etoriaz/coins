import { Controller } from "@hotwired/stimulus"
import { getBitcoinData } from "../api/transactions"
import { bitcoinPrice } from "../api/price"
import { chartCreate } from "../charts/portfolio-chart"

// Connects to data-controller="addresses"
export default class extends Controller {
  static values = { address: String }
  static targets = ["transactions"]

  getDateDaysAgo(days) {
    let date = new Date
    date.setDate(date.getDate() - days)
    return date
  }

  findAnteriorTransactions(transactions, time) {
    if (new Date(transactions[0].confirmed).getTime() < time) {
      return [transactions[0]]
    } else if (new Date(transactions[transactions.length - 1].confirmed).getTime() > time) {
      return [{ inputs: [], outputs: [] }]
    }
    return transactions.find((transaction, index) => {
      if (index === 0) { return false }
      return new Date(transaction.confirmed).getTime() * 1000 < time && new Date(transactions[index - 1].confirmed).getTime() > time
    })
  }

  buildHistory(data, interval, days) {
    bitcoinPrice(interval, this.getDateDaysAgo(days).getTime(), Date.now())
      .then((priceData) => {
        const txs = data.txs.reverse()

        let tmpBalance = data.balance
        let lastPrice = priceData.pop()
        let tx = txs.pop() || { confirmed: 0 }
        priceData.reverse().forEach((price) => {
          while (price[6] < new Date(tx.confirmed).getTime()) {
            tx.inputs.forEach((input) => {
              if (data.address === input.addresses[0]) {
                tmpBalance += input.output_value
              }
            })
            tx.outputs.forEach((output) => {
              if (data.address === output.addresses[0]) {
                tmpBalance -= output.value
              }
            })
            tx = txs.pop() || { confirmed: 0 }
          }

          window.portfolioData.history.timestamps.push(lastPrice[6])
          window.portfolioData.history.values.push(lastPrice[4] * tmpBalance / 100_000_000)
          lastPrice = price
        })

        window.portfolioData.history.timestamps.reverse()
        window.portfolioData.history.values.reverse()
        console.log('bon')
        this.insertChart()
      })
  }

  insertTransactions() {
    window.portfolioData.txs.forEach((transaction) => {
      this.transactionsTarget.insertAdjacentHTML("beforeend",
        `<div class="card-transaction-large my-4">` +
          `<div>` +
            `<strong>FROM:</strong> ${transaction.inputs[0].addresses[0].slice(0, 9)}...` +
          `</div>` +
          `<div>` +
            `<strong>TO:</strong> ${transaction.outputs[0].addresses[0].slice(0, 9)}...` +
          `</div>` +
          `<div class="${transaction.total > 0 ? "text-success" : "text-danger"}">` +
            `${transaction.total / 100_000_000} BTC` +
          `</div>` +
          `<div>` +
            `${new Date(transaction.confirmed).toISOString()}` +
          `</div>` +
          `<div>` +
            `<a href="https://www.blockchain.com/explorer/transactions/btc/${transaction.hash}" target="_blank" class="link-white"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` +
          `</div>` +
        `</div>`
      )
    })
  }

  insertChart() {
    chartCreate(window.portfolioData.history.timestamps, window.portfolioData.history.values)
    console.log('bonjour')
  }

  connect() {
    getBitcoinData(this.addressValue)
      .then((data) => {
        window.portfolioData = {
          address: data.address,
          balance: data.balance,
          txs: [...data.txs],
          history: {
            timestamps: [],
            values: []
          }
        }

        this.insertTransactions()
        this.buildHistory(data, "12h", 90)
      })
  }
}

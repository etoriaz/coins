import { Controller } from "@hotwired/stimulus"
import { getBitcoinData } from "../api/transactions"
import { bitcoinPrice } from "../api/price"
import { chartCreate } from "../charts/portfolio-chart"

// Connects to data-controller="portfolios"
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
              if (data.wallet.addresses.includes(input.addresses[0])) {
                tmpBalance += input.output_value
              }
            })
            tx.outputs.forEach((output) => {
              if (data.wallet.addresses.includes(output.addresses[0])) {
                tmpBalance -= output.value
              }
            })
            tx = txs.pop() || { confirmed: 0 }
            if (tx == null) {
              break
            }
          }

          window.portfolioData.history.timestamps.push(lastPrice[6])
          window.portfolioData.history.values.push(lastPrice[4] * tmpBalance / 100_000_000)
          lastPrice = price
        })

        window.portfolioData.history.timestamps.reverse()
        window.portfolioData.history.values.reverse()
        this.insertChart()
      })
  }

  insertTransactions() {
    window.portfolioData.txs.slice(0, 5).forEach((transaction) => {
      this.transactionsTarget.insertAdjacentHTML("beforeend",
        `<div class="container-transaction mt-4">` +
        `  <div class="top-transaction">` +
        `    <p><strong class="strong-white">FROM : </strong>${transaction.inputs[0].addresses[0].slice(0, 20)}...${transaction.inputs[0].addresses[0].slice(-20)}</p>` +
        `    <!--<p class="strong-white"><strong>8h02 - 01/03/2023</strong></p>-->` +
        `  </div>` +
        `  <p><strong class="strong-white">TO : </strong>${transaction.outputs[0].addresses[0].slice(0, 20)}...${transaction.outputs[0].addresses[0].slice(-23)}</p>` +
        `  <div class="bottom-transaction">` +
        `    <p class="btc-yellow"><strong>${transaction.total / 100_000_000} BTC</strong></p>` +
        `    <a href="https://www.blockchain.com/explorer/transactions/btc/${transaction.hash}" target = "_blank" class= "link-white" > <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` +
        `  </div>` +
        `</div>`
      )
    })
  }


  insertChart() {
    chartCreate(window.portfolioData.history.timestamps, window.portfolioData.history.values)
  }

  connect() {
    getBitcoinData(this.addressValue)
      .then((data) => {
        window.portfolioData = {
          addresses: data.wallet.addresses,
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

import { Controller } from "@hotwired/stimulus"
import { transactionsForBitcoinAddress } from "../api/transactions"

// Connects to data-controller="transactions"
export default class extends Controller {
  static values = { address: String }

  connect() {
    transactionsForBitcoinAddress(this.addressValue, 60)
      .then((transactions) => {
        transactions.forEach((transaction) => {
          this.element.insertAdjacentHTML("beforeend",
            `<div class="card-transaction-large my-4">` +
              `<div>` +
            `<strong>FROM:</strong> ${transaction.inputs[0].prev_out.addr}` +
              `</div>` +
              `<div>` +
            `<strong>TO:</strong> ${transaction.out[0].addr}` +
              `</div>` +
              `<div class="${transaction.result > 0 ? "text-success" : "text-danger"}">` +
                `${transaction.result / 100_000_000} BTC` +
              `</div>` +
              `<div>` +
                `${new Date(transaction.time).toISOString()}` +
              `</div>` +
              `<div>` +
                `<a href="https://www.blockchain.com/explorer/transactions/btc/${transaction.hash}" target="_blank" class="link-white"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` +
              `</div>` +
            `</div>`
          )
        })
      })
  }
}

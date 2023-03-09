import { Controller } from "@hotwired/stimulus"
import { transactionsForBitcoinAddress } from "../api/transactions"

// Connects to data-controller="transactions"
export default class extends Controller {
  static values = { address: String }

  connect() {
    console.log("hii")
    console.log(this.addressValue)
    transactionsForBitcoinAddress(this.addressValue, 60)
      .then((transactions) => {
        transactions.forEach((transaction) => {
          console.log(transaction)
          this.element.insertAdjacentHTML("beforeend",
            `<div class="card-transaction-large my-4">` +
              `<div>` +
                `<strong>FROM:</strong> <span>1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</span>` +
              `</div>` +
              `<div>` +
                `<strong>TO:</strong> 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2` +
              `</div>` +
              `<div class="text-warning">` +
                `${transaction.balance / 100_000_000} BTC` +
              `</div>` +
              `<div>` +
                `8h02 - 01/03/2023` +
              `</div>` +
              `<div class="text-warning">` +
                `PENDING` +
              `</div>` +
            `</div>`
          )
        })
      })
  }
}

import { Controller } from "@hotwired/stimulus"
import { getBalance } from "../api/balance"

// Connects to data-controller="balance"
export default class extends Controller {
  static values = { address: String }

  connect() {
    // console.log(this.addressValue)
    // getBalance(this.addressValue)
    //   .then((data) => {
    //     this.element.innerText = (data.balance / 100_000_000).toString() + " BTC"
    //   })
  }
}

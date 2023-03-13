import { Controller } from "@hotwired/stimulus"
import { getBalance, getMultipleBalances } from "../api/balance"

// Connects to data-controller="balance"
export default class extends Controller {
  static values = { address: String }
  static targets = ["balance"]

  connect() {
    let addresses = []
    this.balanceTargets.forEach((target) => {
      addresses.push(target.dataset.address)
    })
    getMultipleBalances(addresses)
      .then((data) => {
        data.addresses.forEach((address) => {
          const balanceTarget = this.balanceTargets.find(target => target.dataset.address === address.address)
          balanceTarget.innerText = (address.final_balance / 100_000_000).toString() + " BTC"
        })
      })
  }
}

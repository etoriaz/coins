import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-portfolio-name"
export default class extends Controller {
  static targets = ["portfolioName"]
  static values = { authenticityToken: String, portfolioId: Number }

  edit() {
    this.portfolioNameTarget.setAttribute("contenteditable", "true")
    this.portfolioNameTarget.focus()
    let range, selection
    if (document.body.createTextRange) {
      range = document.body.createTextRange()
      range.moveToElementText(this.portfolioNameTarget)
      range.select()
    } else if (window.getSelection) {
      selection = window.getSelection()
      range = document.createRange()
      range.selectNodeContents(this.portfolioNameTarget)
      selection.removeAllRanges()
      selection.addRange(range)
    }
  }

  finishEdit(event) {
    if (event.type === "focusout" || (event.type === "keydown" && event.key === "Enter")) {
      this.portfolioNameTarget.removeAttribute("contenteditable", "true")
      const form = new FormData()
      form.append("portfolio[id]", this.portfolioIdValue)
      form.append("portfolio[name]", this.portfolioNameTarget.innerText)
      form.append("authenticity_token", this.authenticityTokenValue)
      fetch(window.location.pathname, {
        method: "PATCH",
        body: form
      })
    }
  }

  connect() {
  }
}

// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"
import { bitcoinPrice, ethereumPrice, solanaPrice } from "./api/price"
import { transactionsForBitcoinAddress } from "./api/transactions"

const getDateDaysAgo = (days) => {
  let date = new Date
  date.setDate(date.getDate() - days)
  return date
}

bitcoinPrice("12h", getDateDaysAgo(90).getTime(), Date.now())
  .then((data) => { window.btcPrice = data })
transactionsForBitcoinAddress("3Dh8ZebbTSNboNwdwvPA6NjUdfsamPJGXo")
  .then((data) => { window.transactions = data })

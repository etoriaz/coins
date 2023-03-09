// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"
import { chartCreate } from "./charts/portfolio-chart"
import { bitcoinPrice, ethereumPrice, solanaPrice } from "./api/price"
import { transactionsForBitcoinAddress } from "./api/transactions"
import { getHistoryForAddress } from "./api/history"

// bitcoinPrice("12h", getDateDaysAgo(90).getTime(), Date.now())
//   .then((data) => { window.btcPrice = data })
// transactionsForBitcoinAddress("3Dh8ZebbTSNboNwdwvPA6NjUdfsamPJGXo", 90)
//   .then((data) => { console.log(data) })
<<<<<<< HEAD
// getHistoryForAddress("3Dh8ZebbTSNboNwdwvPA6NjUdfsamPJGXo", 90, "12h")
//   .then((data) => { window.addressHistory = data })
// chartCreate()
=======
getHistoryForAddress("3Dh8ZebbTSNboNwdwvPA6NjUdfsamPJGXo", 90, "12h")
  .then((data) => { window.addressHistory = data })
>>>>>>> 4304ac31301b3d0525e2773268a222e35c2fef09

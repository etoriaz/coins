import { bitcoinPrice } from "./price"
import { transactionsForBitcoinAddress } from "./transactions"

const getDateDaysAgo = (days) => {
  let date = new Date
  date.setDate(date.getDate() - days)
  return date
}

const findLatestAnteriorTransaction = (transactions, time) => {
  if (transactions[0].time < time) {
    return transactions[0]
  } else if (transactions[transactions.length - 1].time > time) {
    return { "balance": 0 }
  }
  return transactions.find((transaction, index) => {
    if (index === 0) { return false }
    return transaction.time * 1000 < time && transactions[index - 1].time > time
  })
}

const getHistoryForAddress = async (address, days, interval) => {
  const priceData = await bitcoinPrice(interval, getDateDaysAgo(days).getTime(), Date.now())
  const transactions = await transactionsForBitcoinAddress(address, days)
  const history = {
    "timestamps": [],
    "values": []
  }

  console.log(transactions)

  priceData.forEach((price) => {
    const transaction = findLatestAnteriorTransaction(transactions, price[6])
    history.timestamps.push(price[6])
    history.values.push(price[4] * transaction.balance / 100_000_000)
  })

 return history
}

export { getHistoryForAddress }

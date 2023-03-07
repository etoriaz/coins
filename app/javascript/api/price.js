const getPriceData = async (symbol, interval, start_time, end_time, callback) => {
  const res = await fetch(`https://data.binance.com/api/v3/klines?` +
  `symbol=${symbol}&` +
  `interval=${interval}&` +
  `startTime=${start_time}&` +
  `endTime=${end_time}`)
  return await res.json()
}

const bitcoinPrice = async (interval, start_time, end_time, callback) => {
  return await getPriceData("BTCUSDT", interval, start_time, end_time, callback)
}

const ethereumPrice = async (interval, start_time, end_time, callback) => {
  return await getPriceData("ETHUSDT", interval, start_time, end_time, callback)
}

const solanaPrice = async (interval, start_time, end_time, callback) => {
  return await getPriceData("SOLUSDT", interval, start_time, end_time, callback)
}

export { bitcoinPrice, ethereumPrice, solanaPrice }

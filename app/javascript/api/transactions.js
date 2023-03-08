const transactionsForBitcoinAddress = async (address, days, txs=[], offset=0) => {
  const since = Date.now() - days * 86_400_000
  const res = await fetch(`https://blockchain.info/rawaddr/${address}?offset=${offset}`)
  const data = await res.json()
  txs.push(...data.txs)
  if (txs[txs.length - 1].time * 1000 > since) {
    await transactionsForBitcoinAddress(address, days, txs, offset + 100)
  }
  return txs
}

export { transactionsForBitcoinAddress }

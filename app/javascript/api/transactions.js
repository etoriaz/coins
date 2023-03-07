const transactionsForBitcoinAddress = async (address, callback) => {
  const res = await fetch(`https://blockchain.info/rawaddr/${address}`)
  return await res.json()
}

export { transactionsForBitcoinAddress }

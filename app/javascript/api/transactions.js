const getBitcoinData = async (address) => {
  const res = await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${address}/full?limit=50&token=45533959044c4f84b7e75039c257110c`)
  return await res.json()
}

export { getBitcoinData }

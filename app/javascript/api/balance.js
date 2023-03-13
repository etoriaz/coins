const getBalance = async (address) => {
  const res = await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`)
  return await res.json()
}

const getMultipleBalances = async (addresses) => {
  let url = `https://blockchain.info/multiaddr?active=${addresses.pop()}`
  addresses.forEach((address) => {
    url = `${url}|${address}`
  })
  const res = await fetch(url)
  return await res.json()
}

export { getBalance, getMultipleBalances }

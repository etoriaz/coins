const getBalance = async (address) => {
  const res = await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`)
  return await res.json()
}

export { getBalance }

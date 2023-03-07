require_relative 'price_api'
require_relative 'transaction_api'

# puts PriceApi.bitcoin_price("12h", 1670355313000, 1678134939000)
# puts PriceApi.ethereum_price("12h", 1670355313000, 1678134939000)
# puts PriceApi.solana_price("12h", 1670355313000, 1678134939000)
puts TransactionApi.transactions_for_bitcoin_address("3Dh8ZebbTSNboNwdwvPA6NjUdfsamPJGXo")

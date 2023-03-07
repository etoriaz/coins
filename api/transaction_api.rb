require 'rest-client'
require 'json'

class TransactionApi
  def self.transactions_for_bitcoin_address(address)
    transactions = JSON.parse(RestClient.get("https://blockchain.info/rawaddr/#{address}"))["txs"]
    transactions.map do |transaction|
      {
        amount: transaction["result"],
        time: transaction["time"],
        balance: transaction["balance"]
      }
    end
  end
end

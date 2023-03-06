require 'rest-client'
require 'json'

# Lien de la doc : https://binance-docs.github.io/apidocs/spot/en/#kline-candlestick-data

class PriceApi
  def self.get_price_data(symbol, interval, start_time, end_time)
    url = "https://data.binance.com/api/v3/klines?"\
      "symbol=#{symbol}&"\
      "interval=#{interval}&"\
      "startTime=#{start_time}&"\
      "endTime=#{end_time}"
    data = JSON.parse(RestClient.get(url))
    Hash[data.map { |data_point| [data_point[6], data_point[4]] }]
  end

  def self.bitcoin_price(interval, start_time, end_time)
    get_price_data("BTCUSDT", interval, start_time, end_time)
  end

  def self.ethereum_price(interval, start_time, end_time)
    get_price_data("ETHUSDT", interval, start_time, end_time)
  end

  def self.solana_price(interval, start_time, end_time)
    get_price_data("SOLUSDT", interval, start_time, end_time)
  end
end

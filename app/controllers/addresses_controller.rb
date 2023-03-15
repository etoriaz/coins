class AddressesController < ApplicationController
  def show
    @address = Address.find(params[:id])
  end

  def create
    @address = Address.new(address_params)
    if @address.save!
      Thread.new do
        RestClient.post("https://api.blockcypher.com/v1/btc/main/wallets/portfolio#{@address.portfolio.id}/addresses?token=45533959044c4f84b7e75039c257110c",
          {
            addresses: [@address.public_key]
          }.to_json,
          content_type: :json
        )
      end
      redirect_to portfolio_path(@address.portfolio)
    else
      render 'portfolios/show', status: :unprocessable_entity
    end
  end

  private

  def address_params
    params.require(:address).permit(:public_key, :blockchain, :portfolio_id)
  end
end

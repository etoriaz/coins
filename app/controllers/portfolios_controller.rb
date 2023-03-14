require 'rest-client'

class PortfoliosController < ApplicationController
  def index
    # return all portfolios for the current user
    @user = current_user
    @user_portfolios = current_user.portfolios
  end

  def show
    @portfolio = Portfolio.find(params[:id])
  end

  def create
    @portfolio = Portfolio.new(params_portfolio)
    if user_signed_in?
      @portfolio.user = current_user
    end

    @portfolio.name = "Untitled portfolio"

    if @portfolio.save
      RestClient.post("https://api.blockcypher.com/v1/btc/main/wallets?token=45533959044c4f84b7e75039c257110c",
        {
          name: "portfolio#{@portfolio.id}",
          addresses: @portfolio.addresses.map { |address| address.public_key }
        }.to_json,
        content_type: :json
      )
      redirect_to portfolio_path(@portfolio)
    else
      render 'pages/home', status: :unprocessable_entity
    end
  end

  def update
    if @portfolio.update(params_portfolio)
      redirect to porfolio_path(@porfolio)
    else
      render :show, status: :unprocessable_entity
    end
  end

  private

  def params_portfolio
    params.require(:portfolio).permit(:name, addresses_attributes: [:id, :public_key, :_destroy])
  end
end

class PortfoliosController < ApplicationController
  def index
    # return all portfolios for the current user
    @user = current_user
    @user_portfolios = Portfolio.all
  end

  def show
  end

  def create
    @portfolio = Portfolio.new(params_portfolio)
    if @portfolio.save
      redirect_to portfolios_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  def update
    if @portfolio.update(params_portfolio)
      redirect to porfolio_path(@porfolio)
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def params_portfolio
    params.require(:portfolio).permit(:name)
  end
end

class AddressesController < ApplicationController
  def show
    @address = Address.find(params[:id])
  end

  def create
    @address = Address.new(address_params)
    if @address.save!
      redirect_to portfolio_path(@address.portfolio)
    else
      render 'portfolios/show', status: :unprocessable_entity
    end
  end

  def destroy
    @address = Address.find(params[:id])
    @address.destroy
    redirect_to portfolio_path, status: :see_other
  end


  private

  def address_params
    params.require(:address).permit(:public_key, :blockchain, :portfolio_id)
  end
end

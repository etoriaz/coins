class AddressesController < ApplicationController
  def show
    @address = Address.find_by(public_key: params[:public_key])

  def create
    @address = Address.new(address_params)
    if @address.save
      redirect_to address_path(@address)
    else
      render 'pages/home', status: :unprocessable_entity
    end
  end

  private

  def address_params
    params.require(:address).permit(:public_key, :blockchain)
  end
end

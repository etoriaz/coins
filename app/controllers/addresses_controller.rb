class AddressesController < ApplicationController
  def show
    @address = Address.find_by(public_key: params[:public_key])
  end
end

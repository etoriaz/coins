class RenamePortfollioAddresstoPorfolioAddress < ActiveRecord::Migration[7.0]
  def change
    rename_table :portfollio_addresses, :portfolio_addresses
  end
end

class CreatePortfollioAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :portfollio_addresses do |t|
      t.references :portfolio, null: false, foreign_key: true
      t.references :address, null: false, foreign_key: true

      t.timestamps
    end
  end
end

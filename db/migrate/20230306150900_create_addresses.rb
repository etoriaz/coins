class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.references :portfolio, null: false, foreign_key: true
      t.string :public_key
      t.string :blockchain
      t.integer :balance

      t.timestamps
    end
  end
end

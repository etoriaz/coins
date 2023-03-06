class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :public_key
      t.string :blockchain
      t.integer :balance

      t.timestamps
    end
  end
end

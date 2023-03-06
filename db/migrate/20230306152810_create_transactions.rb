class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.integer :amount
      t.string :signature
      t.date :date_sent

      t.timestamps
    end
  end
end

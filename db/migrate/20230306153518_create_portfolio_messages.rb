class CreatePortfolioMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :portfolio_messages do |t|
      t.references :portfolio, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :message

      t.timestamps
    end
  end
end

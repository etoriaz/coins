class CreateMessageVotes < ActiveRecord::Migration[7.0]
  def change
    create_table :message_votes do |t|
      t.integer :vote
      t.references :user, null: false, foreign_key: true
      t.references :portfolio_message, null: false, foreign_key: true

      t.timestamps
    end
  end
end

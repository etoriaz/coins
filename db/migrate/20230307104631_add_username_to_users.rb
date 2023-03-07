class AddUsernameToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :usurname, :string
  end
end

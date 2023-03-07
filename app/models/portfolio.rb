class Portfolio < ApplicationRecord
  belongs_to :user
  validates :name, presence: true

  has_many :addresses, through: :portfolio_addresses
end

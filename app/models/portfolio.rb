class Portfolio < ApplicationRecord
  belongs_to :user
  validates :name, presence: true

  has_many :addresses, through: portfollio_addresses
end

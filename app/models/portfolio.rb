class Portfolio < ApplicationRecord
  belongs_to :user
  validates :name, presence: true

  has_many :addresses
end

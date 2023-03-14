class Address < ApplicationRecord
  belongs_to :portfolio

  validates :public_key, presence: true
end

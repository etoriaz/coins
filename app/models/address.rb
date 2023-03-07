class Address < ApplicationRecord
  validates :public_key, presence: true
  validates :blockchain, presence: true
end

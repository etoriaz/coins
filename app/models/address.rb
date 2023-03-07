class Address < ApplicationRecord
  validate :public_key, presence: true
  validate :blockchain, presence: true
end

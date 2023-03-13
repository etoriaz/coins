class Portfolio < ApplicationRecord
  belongs_to :user
  validates :name, presence: true

  has_many :addresses
  accepts_nested_attributes_for :addresses, reject_if: :all_blank, allow_destroy: true
end

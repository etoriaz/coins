class PortfollioAddress < ApplicationRecord
  belongs_to :portfolio
  belongs_to :address
end

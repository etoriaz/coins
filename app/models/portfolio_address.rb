class PortfolioAddress < ApplicationRecord
  belongs_to :portfolio
  belongs_to :address
end

class MessageVote < ApplicationRecord
  belongs_to :user
  belongs_to :portfolio_message
end

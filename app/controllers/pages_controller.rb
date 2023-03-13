class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    @portfolio = Portfolio.new
  end

  def chart
  end

  def component
  end
end

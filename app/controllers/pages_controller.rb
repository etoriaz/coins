class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
  end

<<<<<<< HEAD
  def chart
=======
  def component
>>>>>>> 4304ac31301b3d0525e2773268a222e35c2fef09
  end
end

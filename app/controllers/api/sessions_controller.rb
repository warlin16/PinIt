class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials([:user][:username], [:user][:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid Credentials!'], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ['No user logged in.'], status: 404
    end
  end

end

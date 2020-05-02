class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by_id(params[:id])
    render 'api/users/show'
  end

  def update
    @user = User.find_by_id(params[:user][:id])
    @user.avatar = params[:user][:attachment_attributes][:avatar]
    if @user.update_attributes(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end

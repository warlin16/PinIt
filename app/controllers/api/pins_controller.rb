class Api::PinsController < ApplicationController

  def index
    @pins = Pin.all.shuffle
    render 'api/pins/index'
  end

  def create
    @pin = Pin.new(pin_params)
    if @pin.save
      @author = User.find_by_id(@pin.author_id)
      if pin_params[:board_id]
        PinBoard.create(
          board_id: pin_params[:board_id],
          pin_id: @pin.id)
      end
      render 'api/pins/show'
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def show
    @pin = Pin.find_by_id(params[:id])
    @author = User.find_by_id(@pin.author_id)
    render 'api/pins/show'
  end

  def update
    @pin = Pin.find_by_id(params[:id])
    @author = User.find_by_id(@pin.author_id)
    if @pin.update_attributes(pin_params)
      render 'api/pins/show'
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def destroy
    pin = Pin.find_by_id(params[:id])
    pin.destroy
  end

  private
  def pin_params
    params.require(:pin).permit(:title, :description, :image, :author_id, :board_id)
  end
end

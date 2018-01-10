class Api::PinsController < ApplicationController

  def create
    @pin = Pin.new(pin_params)

    if @pin.save
      render 'api/pins/show'
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end
end

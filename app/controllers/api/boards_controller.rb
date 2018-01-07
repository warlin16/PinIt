class Api::BoardsController < ApplicationController

  def create
    @board = Board.new(board_params)

    if @board.save
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def show
    @board = Board.find_by_id(params[:id])
    render 'api/boards/show'
  end

  def destroy

  end

  private
  def board_params
    params.require(:board).permit(:title, :description)
  end
end

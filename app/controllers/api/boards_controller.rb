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

  def update
    @board = current_user.boards.find(params[:id])
    if @board.update_attributes(board_params)
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private
  def board_params
    params.require(:board).permit(:author_id, :title, :description)
  end
end

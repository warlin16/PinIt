json.extract! user, :id, :username
json.avatarUrl asset_path(user.avatar.url)



json.boardIds user.boards do |board|
  json.id board.id
  json.title board.title
  json.description board.description
end

# json.board_ids user.boards, :id, :title, :description

# user.boards.to_a.each do |board|
#   json.set! board.id do
#     json.extract! board, :id
#   end
# end

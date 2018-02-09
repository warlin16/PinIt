json.extract! board, :id, :title, :description, :author_id
json.authorAvi asset_path(board.user.avatar.url)

json.pinIds board.pins do |pin|
  json.id pin.id
  json.title pin.title
  json.description pin.description
  json.img asset_path(pin.image.url)
end

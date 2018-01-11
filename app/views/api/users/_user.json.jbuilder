json.extract! user, :id, :username
json.avatarUrl asset_path(user.avatar.url)



json.boardIds user.boards do |board|
  json.id board.id
  json.title board.title
  json.description board.description
end

json.pinIds user.pins do |pin|
  json.id pin.id
  json.title pin.title
  json.description pin.description
  json.img asset_path pin.image.url
end

json.extract! pin, :id, :title, :board_id, :description, :author_id, :attachment_id
json.img asset_path pin.image.url
json.author author.username
json.authorAvi asset_path(author.avatar.url)

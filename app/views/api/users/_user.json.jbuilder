json.extract! user, :id, :username

boards.each do |board|
  json.set! board.id do
    json.extract :id, :title, :description
  end
end

json.pins do
  @pins.each do |pin|
    json.set! pin.id do
      json.extract! pin, :id, :title, :board_id, :description, :author_id
      json.img asset_path pin.image.url
    end
  end
end

json.pinOrder @pins.map { |pin| pin.id }

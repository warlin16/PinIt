# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!(username: 'gw', password: 'password', avatar: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/troll.png')
user2 = User.create!(username: 'king', password: 'password', avatar: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/king_mickey.png')
user3 = User.create!(username: 'darth', password: 'password', avatar: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/darth-icon.jpeg')
user4 = User.create!(username: 'nes', password: 'password', avatar: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/nes.jpg')

Board.destroy_all
board1 = Board.create!(title: 'board', description: 'first board!', author_id: user1.id)
board2 = Board.create!(title: 'fitness', description: 'workout ideas!', author_id: user2.id)
board3 = Board.create!(title: 'cars', description: 'cars', author_id: user1.id)
board4 = Board.create!(title: 'random', description: 'random board!', author_id: user3.id)
board5 = Board.create!(title: 'The force', description: 'ideas of abusing the force', author_id: user4.id)
board6 = Board.create!(title: 'third board', description: 'third board!', author_id: user1.id)
board6 = Board.create!(title: 'kingdom hearts', description: 'i was in this game!', author_id: user2.id)
board7 = Board.create!(title: 'board', description: 'board!', author_id: user4.id)
board8 = Board.create!(title: 'games', description: 'classic board!', author_id: user4.id)
board9 = Board.create!(title: 'another board', description: 'dj board!', author_id: user1.id)
board10 = Board.create!(title: 'the div board', description: 'div div!', author_id: user1.id)
board11 = Board.create!(title: 'random stuff', description: 'board!', author_id: user3.id)
board12 = Board.create!(title: 'board... stuff', description: 'board!', author_id: user1.id)
board11 = Board.create!(title: 'i think i like boards', description: 'board!', author_id: user1.id)

Pin.destroy_all
pin1 = Pin.create!(title: 'first pin', description: 'it works!',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/success.jpg')
pin2 = Pin.create!(title: 'second pin', description: 'Actually just making sure it works',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/success.jpg')
pin3 = Pin.create!(title: 'third pin', description: 'third times the charm',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/success.jpg')
pin4 = Pin.create!(title: 'fourth pin', description: 'you think id stop trying after 3 right?',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/success.jpg')
pin5 = Pin.create!(title: 'random pin', description: 'Hi im squeezy',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/squeezy.png')
pin6 = Pin.create!(title: 'Home', description: 'no place like home',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/santiago.jpg')
pin7 = Pin.create!(title: 'TBT', description: 'Them good ol days',
  author_id: user2.id, board_id: board4.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/classicmickey2.gif')
pin8 = Pin.create!(title: 'The king', description: '😍',
  author_id: user2.id, board_id: board2.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/classicmickey2.gif')
pin9 = Pin.create!(title: 'Handsome me', description: 'Luke im coming',
  author_id: user3.id, board_id: board4.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/darth.jpg')
pin10 = Pin.create!(title: 'Icon', description: 'That looks good!',
  author_id: user2.id, board_id: board4.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/mickey.gif')
pin11 = Pin.create!(title: 'rivalry', description: 'Boston is better HA',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/rivalry.jpg')
pin12 = Pin.create!(title: 'DELICIOUS', description: '😋',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/tacos.jpg')
pin13 = Pin.create!(title: '😍', description: 'Feeling homesick',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/dr_houses.jpg')
pin14 = Pin.create!(title: 'R8', description: 'wowsers!',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/audi.jpg')
pin15 = Pin.create!(title: 'True Love', description: '9S & 2B',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/ItXu8xcr.jpg')
pin16 = Pin.create!(title: 'Friendship...', description: 'Lelouch && suzaku',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/codegeass.jpg')
pin17 = Pin.create!(title: 'The JAMS!!', description: 'El mayimbe',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/bachata.jpeg')
pin18 = Pin.create!(title: 'Fitness Ideas', description: 'Gotta get back to it!',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/fitness.jpg')
pin19 = Pin.create!(title: 'The green monster', description: 'Beautiful',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/green-monster.jpg')
pin20 = Pin.create!(title: 'Goals', description: 'All over the place',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/goals.jpg')
pin21 = Pin.create!(title: 'Ways to save', description: 'Dont spend anything!',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/money-save.jpg')
pin22 = Pin.create!(title: 'Current Location', description: 'Eh',
  author_id: user1.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/nyc.jpg')
pin23 = Pin.create!(title: 'Fitness goals', description: 'Damn Im out of shape...',
  author_id: user4.id, board_id: board1.id, image: 'https://s3.us-east-2.amazonaws.com/publiseeds-pro/switch.jpg')

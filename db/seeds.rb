# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying Pins"
Pin.destroy_all

puts "Destroying users"
User.destroy_all

NUM_USERS = 10
NUM_PINS = 3

NUM_USERS.times do |user|
  user = User.create(username: Faker::App.unique.name)

  NUM_PINS.times do |n|
    buy_sell = n % 2 == 0 ? false : true
    user.pins.create(item_name: Faker::Commerce.product_name, buy_sell: buy_sell, description: Faker::Hipster.paragraph)
  end

end

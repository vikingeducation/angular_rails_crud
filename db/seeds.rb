# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pin.destroy_all

puts 'creating users and pins'
5.times do |num|
  user = User.create(username: Faker::Name.first_name, email: "#{num}@aol.com", password: "graham+mike")
  pin = {
    item_name: Faker::Commerce.product_name,
    buy_sell: true,
    description: Faker::Lorem.sentence(3)
  }
  user.pins.create(pin)
end

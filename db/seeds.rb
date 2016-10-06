# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying Users"
User.destroy_all

puts "Destroying Pins"
Pin.destroy_all


puts "Creating Users.."
10.times do |n|
  user = User.create!({
    username: Faker::Pokemon.name
  })
  puts "Creating pins for user.."
  user.pins.create!({
    item_name: Faker::Commerce.product_name,
    buy_sell: [false,true].sample,
    description: Faker::Lorem.paragraph
  })
end
puts "Done!"

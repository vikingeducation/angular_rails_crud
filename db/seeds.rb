# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Clearing database..."
User.delete_all
Pin.delete_all
puts "DONE"

puts "Creating users..."
20.times do 
  User.create(
    username: Faker::App.name
    )
end
puts "DONE"


puts "Creating pins..."
User.all.each do |user|
  2.times do
    user.pins.create(
      item_name: Faker::Hipster.word,
      description: Faker::Hipster.sentence,
      buy_sell: false
      )
  end
end
puts "DONE"
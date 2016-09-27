# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


puts "Cleaning Database"

Pin.destroy_all
User.destroy_all

puts 'Database Cleaned'

puts 'Creating Users'

users = ['John', 'Bob', 'Dave', 'Kyle', 'Chris']

5.times do |i|
  User.create(username: users[i])
end

puts 'Users Created'

puts 'Creating Pins'

10.times do |i|
  pin = Pin.new

  pin.user_id = User.all.sample.id
  pin.description = 'Exceptional Item !'
  pin.item_name = "Macbook Pro #{i}"
  pin.buy_sell = (rand() * 2).floor === 0 ? true : false

  pin.save()
end

puts 'Pins Created'

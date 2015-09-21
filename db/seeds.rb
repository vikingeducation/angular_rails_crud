# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

MULTIPLIER = 20

def generate_user
  user = User.new
  user.username = Faker::Internet.user_name
  user.save
end

def generate_pin
  pin = Pin.new
  pin.item_name = Faker::Commerce.product_name
  pin.buy_sell = [true, false].sample
  pin.description = Faker::Lorem.sentence
  pin.user_id = User.ids.sample
  pin.save
end

MULTIPLIER.times do
  generate_user
end

(MULTIPLIER * 3).times do
  generate_pin
end


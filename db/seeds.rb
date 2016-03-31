# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

MULTIPLIER = 10

def create_user
  u = User.new
  u.username = Faker::Internet.user_name
  u.save!
end

def create_pin(user)
  p = Pin.new
  p.item_name = Faker::Commerce.product_name
  p.buy_sell = [0, 1].sample
  p.description = Faker::Lorem.paragraph
  p.user_id = user.id
  p.save!
end

puts 'Clearing old records'

User.destroy_all
Pin.destroy_all

puts 'Old records cleared'

puts 'Creating users'

MULTIPLIER.times do
  create_user
end

puts 'Users created'
puts 'Creating pins'

User.all.each do |user|
  5.times do
    create_pin(user)
  end
end

puts 'Pins created'
puts 'Seeds created'
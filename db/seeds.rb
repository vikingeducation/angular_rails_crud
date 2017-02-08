# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Pin.destroy_all

5.times do |i|

  u = User.new
  u.username = Faker::Internet.user_name
  u.save

  p = Pin.new
  p.item_name = Faker::Commerce.product_name
  p.buy_sell = i % 2 == 0 ? true : false
  p.description = Faker::Lorem.paragraph
  p.user_id = User.all.sample.id
  p.save!
end

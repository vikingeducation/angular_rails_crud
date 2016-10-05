# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Pin.destroy_all

20.times do
  u = User.create({username: Faker::Name.first_name})
  3.times do
    u.pins.create({item_name: Faker::Commerce.product_name,
                    buy_sell: [true, false].sample,
                    description: Faker::Lorem.paragraph})
  end
end
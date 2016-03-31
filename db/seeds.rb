# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
Pin.destroy_all


def create_user 
  User.create(username: Faker::Name.name)
end


10.times do
  create_user
end


def create_pin(user_id)
  Pin.create(item_name: Faker::Commerce.product_name, buy_sell: [true, false].sample, description: Faker::Hipster.sentence, user_id: user_id)
end


User.all.each do |user|
  3.times do 
    create_pin(user.id)
  end
end
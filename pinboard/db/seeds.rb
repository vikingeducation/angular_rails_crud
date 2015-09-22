# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
Pin.destroy_all

10.times do

  User.create(username: Faker::Internet.user_name,
              email:    Faker::Internet.email,
              password: 'foobar_1234',
              password_confirmation: 'foobar_1234')
end

users = User.ids
status = [true, false]

20.times do

  Pin.create( item_name: Faker::Commerce.product_name,
              buy_string: status.sample,
              description: Faker::Lorem.sentence(2),
              user_id: users.sample )

end
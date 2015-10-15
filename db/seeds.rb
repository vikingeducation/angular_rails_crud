# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


USERS = ['Abe', 'Bob', 'Cam', 'Dan']

ITEMS = [
          {
            name: 'Table',
            description: 'A place to eat.'
          },
          {
            name: 'Desk',
            description: 'A place to work.'
          },
          {
            name: 'Dynamite',
            description: 'Ideal for cartoon coyotes.'
          },
          {
            name: 'Cream cheese',
            description: 'Safe for internet purchasing.'
          }
        ]

USERS.each do |user|
  u = User.new(username: user)

  rand(1..4).times do
    p = u.pins.build
    i = ITEMS[rand(ITEMS.length)]
    p.item_name = i[:name]
    p.description = i[:description]
    p.buy_sell = false
  end

  u.save!
end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
Pin.delete_all

puts "Building users and pins"
5.times do 
  user = User.create(username: Faker::GameOfThrones.character, email: Faker::Internet.email, password: 'password')
  2.times do 
    user.pins.create({
      item_name: Faker::Space.constellation,
      buy_sell: Faker::Boolean.boolean,
      description: Faker::Hipster.paragraph
      })
  end
end

puts "Done"
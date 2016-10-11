# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Pin.destroy_all

puts "creating users"

names = ["Batman", "Superman", "Robin", "Spiderman"]

4.times do |i|
  
  u = User.new(username: names[i])
  u.save!

end

item_names = ["pickle", "herron", "crayons", "bocci ball", "stereo", "lawnmower", "ice skates", "skate board", "Air McFlys", "AdiZeros", "Roshe Runs"]

puts "creating pins"

User.all.each do |user|

  p = Pin.new(item_name: item_names.sample, buy_sell: [true, false].sample, description: "this is an amazing item contact to buy it now", user_id: user.id)

  q = Pin.new(item_name: item_names.sample, buy_sell: [true, false].sample, description: "this is an amazing item contact to buy it now", user_id: user.id)

  p.save!
  q.save!

end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Pin.destroy_all

3.times do |i|
  User.create!(username: "Dixie#{i}")
end

10.times do |i|
  Pin.create!(
    item_name: "Doodad#{i}",
    buy_sell: [true, false].sample,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa, fuga facere. Eius nam, voluptatem, quod, placeat sit culpa explicabo eveniet ipsam inventore eos autem eaque nulla ullam, ratione accusantium!",
    user_id: User.all.sample.id
  )
end
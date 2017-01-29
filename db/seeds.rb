User.destroy_all
Pin.destroy_all

MULTIPLIER = 10
puts 'Creating Users'
(MULTIPLIER).times do
  User.create(username: Faker::Internet.user_name)
end

puts 'Creating Pins'
pins = []
(MULTIPLIER*5).times do
  pins << {
    :item_name => Faker::Commerce.product_name,
    :buy_sell => rand(2) ? true:false,
    :description => Faker::Lorem.paragraph,
    :user_id => User.pluck(:id).sample
  }
end
Pin.create(pins)

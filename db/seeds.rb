User.destroy_all
Pin.destroy_all

I = 15

10.times do |i|
  user = User.create(name: Faker::Name.name)
  j = rand(1..3)
  j.times do |n|
    user.pins.create( item_name: Faker::Commerce.product_name,
                      buy_sell: Faker::Boolean.boolean,
                      description: Faker::Hipster.paragraph
    )
  end
end

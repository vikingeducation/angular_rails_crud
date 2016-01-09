

User.destroy_all
10.times do
	u = User.new
	u.username = Faker::Internet.user_name
	u.save!
end

Pin.destroy_all

# Get an array of all user ID's
user_ids = User.all.pluck(:id)
bool = [true, false]

10.times do
	p = Pin.new
	p.item_name = Faker::Commerce.product_name
	p.buy_sell = bool.sample
	p.description = Faker::Lorem.paragraph
	p.user_id = user_ids.sample
	p.save!
end
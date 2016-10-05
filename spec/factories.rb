FactoryGirl.define do

  factory :user do
    username "JoeB"
  end

  factory :pin do
    item_name "Junk"
    description "This is a bunch of junk"
    buy_sell true
    user
  end

end

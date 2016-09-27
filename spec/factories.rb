FactoryGirl.define do 

  factory :user do
    username 'John'
  end

  factory :pin do
    item_name 'macbook'
    description 'new and amazing'
    buy_sell true

    user
  end
end
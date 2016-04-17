FactoryGirl.define do

  sequence :email do |n|
    "person#{n}@example.com"
  end

  factory :user do
    username "someuser"
    email
    password "password"
    password_confirmation "password"
  end

  factory :pin do
    item_name "MyString"
    buy_sell false
    description "MyText"
    association :user
  end
end

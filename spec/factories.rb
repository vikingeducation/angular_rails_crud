FactoryGirl.define do

  factory :user do
    username "someuser"
  end

  factory :pin do
    item_name "MyString"
    buy_sell false
    description "MyText"
    association :user
  end
end

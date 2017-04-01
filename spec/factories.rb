FactoryGirl.define do

  factory :user do
    username "alice"
  end

  factory :pin do
    item_name "bowling pin"
    description "try to knock it down"
    buy_sell false
    association :user
  end


end
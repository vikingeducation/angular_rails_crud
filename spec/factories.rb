FactoryGirl.define do

  factory :pin do
    item_name "Test factory name"
    description "Factory description"
    buy_sell "true"
    user_id 1
  end

  factory :user do
    username "Merf"
  end
end

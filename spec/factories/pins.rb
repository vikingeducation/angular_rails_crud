FactoryGirl.define do
  factory :pin do
    item_name "Test Item"
    description "Test Description"
    buy_sell false
    user
  end
end

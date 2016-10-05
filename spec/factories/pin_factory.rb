FactoryGirl.define do


  factory :user do
    username "username"
  end

  factory :pin do
    item_name "item"
    buy_sell true
    description "description item"
    user
  end

end



# pins = build_list(:)

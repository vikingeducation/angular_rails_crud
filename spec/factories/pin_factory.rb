FactoryGirl.define do


  factory :user do
    username "username"
    sequence :email  do |n|
      "person#{n}@example.com"
    end
    password "password"
  end

  factory :pin do
    item_name "item"
    buy_sell true
    description "description item"
    user
  end

end



# pins = build_list(:)

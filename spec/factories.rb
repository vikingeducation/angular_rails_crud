FactoryGirl.define do

  factory :user do

    username 'foobar'

  end

  factory :pin do

    sequence(:item_name) { |n| 'Foo Item #{n}' }
    buy_sell false
    description 'Foo Description'
    association :user

  end

end
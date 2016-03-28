# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# ----------------------------------------
# Clean
# ----------------------------------------
if Rails.env == 'development'
  puts 'Cleaning Database'
  puts
  Rake::Task['db:migrate:reset'].invoke
end

# ----------------------------------------
# Config
# ----------------------------------------

MULTIPLIER = 1

USER_FULL_NAMES = [
  'Luke Skywalker',
  'Jabba the Hutt',
  'Darth Vader',
  'Princess Leia',
  'Chewbacca',
  'Han Solo',
  'Obi-Wan Kenobi',
  'C-3PO'
]

PIN_TYPES = [
  'buying',
  'selling'
]

ITEM_NAMES = [
  'Light Saber',
  'Death Star',
  'Blaster',
  'Millennium Falcon',
  'Wookiee',
  'Ewok',
  'TIE fighter',
  'Jawa',
  'Droid',
  'X-wing'
]

ADJECTIVES = [
  'mint condition',
  'dusty',
  'refurbished',
  'reliable',
  'low maintenance',
  'modern',
  'noisy'
]

TEXT_BODIES = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga vel temporibus accusamus enim laborum nihil. Maxime laboriosam, nam asperiores neque quae corporis odio vel dicta porro aliquid tenetur eum numquam.',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quae minima fuga voluptas sed consequuntur odit rem, esse voluptatem, recusandae rerum dicta beatae repellat provident? Ipsam inventore, commodi repellendus numquam!',
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, quam officia exercitationem odio fugiat adipisci harum quos accusamus nobis atque itaque minima, numquam asperiores explicabo cupiditate amet nesciunt ut delectus.'
]

# ----------------------------------------
# Create PinTypes
# ----------------------------------------
puts 'Creating PinTypes'
pin_types = []
PIN_TYPES.each do |name|
  pin_types << {
    :name => name
  }
end
PinType.create(pin_types)
pin_types = PinType.all

# ----------------------------------------
# Create Users
# ----------------------------------------
puts 'Creating Users'
users = []
USER_FULL_NAMES.each do |user_full_name|
  users << {
    :full_name => user_full_name,
    :username => user_full_name.underscore.gsub(/\s/, '_')
  }
end
User.create(users)
users = User.all

# ----------------------------------------
# Create Pins
# ----------------------------------------
puts 'Creating Pins'
pins = []
(MULTIPLIER * 50).times do
  pins << {
    :item_name => "#{ADJECTIVES.sample.titleize} #{ITEM_NAMES.sample}",
    :user_id => users.sample.id,
    :pin_type_id => pin_types.sample.id,
    :description => TEXT_BODIES.sample
  }
end
Pin.create(pins)
pins = Pin.all



# ----------------------------------------
# Finish
# ----------------------------------------
puts 'done'






















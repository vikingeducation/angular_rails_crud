class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      # t.string :first_name, null: false
      # t.string :last_name, null: false
      # t.string :email, null: false
      # t.string :password, null: false
      # t.string :password_confirmation, null: false

      t.timestamps null: false
    end
  end
end

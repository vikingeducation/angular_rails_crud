class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :full_name, :null => false
      t.string :username, :null => false

      t.index :full_name
      t.index :username, :unique => true

      t.timestamps null: false
    end
  end
end

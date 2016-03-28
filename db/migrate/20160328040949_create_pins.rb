class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.string :item_name, :null => false
      t.text :description, :null => false
      t.integer :pin_type_id, :null => false
      t.integer :user_id, :null => false

      t.index :item_name
      t.index :pin_type_id
      t.index :user_id

      t.timestamps null: false
    end
  end
end

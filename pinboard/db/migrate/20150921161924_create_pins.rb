class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.string :item_name, null: false
      t.boolean :buy_string, null: false
      t.string :description, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end

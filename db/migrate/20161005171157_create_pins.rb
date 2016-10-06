class CreatePins < ActiveRecord::Migration[5.0]
  def change
    create_table :pins do |t|
      t.string :item_name, null: false
      t.boolean :buy_sell, null: false
      t.text :description, null: false
      t.references :user, null: false

      t.timestamps
    end
  end
end

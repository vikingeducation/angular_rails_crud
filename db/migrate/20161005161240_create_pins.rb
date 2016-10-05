class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.string :item_name
      t.boolean :buy_sell
      t.text :description
      t.references :user
      t.timestamps null: false
    end
  end
end

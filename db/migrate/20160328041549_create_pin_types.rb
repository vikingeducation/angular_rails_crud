class CreatePinTypes < ActiveRecord::Migration
  def change
    create_table :pin_types do |t|
      t.string :name, :null => false

      t.index :name, :unique => true

      t.timestamps null: false
    end
  end
end

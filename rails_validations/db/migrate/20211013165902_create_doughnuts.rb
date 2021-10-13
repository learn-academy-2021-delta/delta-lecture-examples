class CreateDoughnuts < ActiveRecord::Migration[6.1]
  def change
    create_table :doughnuts do |t|
      t.string :kind
      t.string :topping
      t.integer :count

      t.timestamps
    end
  end
end

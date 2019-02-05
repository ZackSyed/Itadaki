class CreateTabs < ActiveRecord::Migration[5.2]
  def change
    create_table :tabs do |t|
      t.string :name, null: false 
      t.boolean :settled, default: false 
      t.integer :total, null: false 
      t.integer :group_id, null: false 
      t.integer :lender_id, null: false 

      t.timestamps 
    end
    add_index :tabs, [:group_id]
    add_index :tabs, [:lender_id]
  end
end

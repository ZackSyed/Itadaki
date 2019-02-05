class CreateSplits < ActiveRecord::Migration[5.2]
  def change
    create_table :splits do |t|
      t.integer :tab_id, null: false 
      t.integer :user_id, null: false 
      t.integer :amount_owed
      t.boolean :paid, default: false 

      t.timestamps 
    end
    add_index :splits, [:tab_id]
    add_index :splits, [:user_id]
  end
end

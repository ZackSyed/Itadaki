class CreateInteractions < ActiveRecord::Migration[5.2]
  def change
    create_table :interactions do |t|
      t.integer :group_id, null: false 
      t.integer :user_id, null: false
    end
    add_index :interactions, [:group_id]
    add_index :interactions, [:user_id]
    add_index :interactions, [:user_id, :group_id]
  end
end

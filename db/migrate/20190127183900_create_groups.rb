class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :group_name, null: false 

      t.timestamps 
    end
  end
end

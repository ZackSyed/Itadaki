class AddIndexFriends < ActiveRecord::Migration[5.2]
  def change
    add_index :friends, :friend_id, unique: false 
    add_index :friends, :user_id, unique: false 
  end
end

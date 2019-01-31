class RemoveIndexFriends < ActiveRecord::Migration[5.2]
  def change
    remove_index :friends, :friend_id 
    remove_index :friends, :user_id 
  end
end

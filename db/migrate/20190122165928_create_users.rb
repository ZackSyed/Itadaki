class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email, unique: true, allow_null: true 
      t.string :password_digest, null: false 
      t.string :session_token, null: false 

      t.timestamps
    end
    add_index :users, [:username], :unique => true 
    add_index :users, [:email], :unique => true
    add_index :users, [:username, :email], :unique => true
  end
end

class Friend < ApplicationRecord 
    validates :friend_id, :user_id, presence: true 
    validates :accepted, inclusion: [true, false], { default: false }


    # belongs_to :user 
    # belongs_to :friend, 
    #     primary_key: :id, 
    #     foreign_key: :friend_id, 
    #     class_name: :user
end 
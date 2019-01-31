class Friend < ApplicationRecord 
    validates :friend_id, :user_id, presence: true 
    validates :accepted, inclusion: [true, false]


    belongs_to :user 
    belongs_to :user_friend, 
        primary_key: :id, 
        foreign_key: :friend_id, 
        class_name: :User

    def confirmation

    end
end 
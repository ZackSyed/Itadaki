class Interaction < ApplicationRecord 
    validates :group_id, :user_id, presence: true

    belongs_to :group
    belongs_to :user 
end 

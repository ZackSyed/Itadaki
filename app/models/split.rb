class Split < ApplicationRecord 
    validates :tab_id, :user_id, presence: true 
    validates :paid, inclusion: [true, false]

    belongs_to :tab
    belongs_to :user 
end 
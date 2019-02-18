class Tab < ApplicationRecord 
    validates :total, presence: true 
    validates :settled, inclusion: { in: [ true, false ] }

    belongs_to :group 
    belongs_to :lender,
        foreign_key: :lender_id,
        class_name: :User
end 
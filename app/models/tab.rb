class Tab < ApplicationRecord 
    validates :total, presence: true 
    validates :settled, inclusion: { in: [ true, false ] }

    belongs_to :group 
    belongs_to :lender,
        foreign_key: :lender_id,
        class_name: :User

    has_many :splits

    after_commit :create_split 

    def create_split
        Split.create(tab_id: self.id, user_id: self.lender_id)
    end 
end 
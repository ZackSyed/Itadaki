class Split < ApplicationRecord 
    validates :tab_id, :user_id, presence: true 
    validates :paid, inclusion: [true, false]

    belongs_to :tab
    belongs_to :user 

    after_initialize :set_amount_owed

    def set_amount_owed
        tab = Tab.find(self.tab_id)
        self.amount_owed = (tab.total / 2)
        self.save!
    end 
end 
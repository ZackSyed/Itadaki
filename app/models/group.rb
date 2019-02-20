class Group < ApplicationRecord
    validates :group_name, presence: true 

    has_many :tabs
    has_many :interactions
end 
class Group < ApplicationRecord
    validates :group_name, presence: true 

    has_many :tabs
    has_many :interactions

    has_many :users, 
        through: :interactions, 
        source: :user

    def create_interactions(usernames)
        usernames.each do |username|
            user = User.find_by(username: username)
            Interaction.create(user_id: user.id, group_id: self.id)
        end 
    end 
end 
@friends.each do |friend|
    json.set! friend.id do
        json.extract! friend.user_friend, :id, :username 
    end
end 
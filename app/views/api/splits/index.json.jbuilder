@splits.each do |split|
    json.set! split.user.id do
        json.extract! split, :id, :tab_id, :user_id, :amount_owed
    end
end 
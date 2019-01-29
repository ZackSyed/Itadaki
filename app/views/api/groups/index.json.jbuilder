json.set! :groups do 
    @groups.each do |group|
        json.set! :group.id do 
            json.extract! group :id, :group_name
        end 
    end 
end 
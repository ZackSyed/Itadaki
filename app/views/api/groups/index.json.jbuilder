@groups.each do |group|
    json.set! group.id do 
        json.extract! group, :id, :group_name, :created_at
    end
end 
@groups.each do |group|
    json.extract! group, :id, :group_name, :created_at
end 
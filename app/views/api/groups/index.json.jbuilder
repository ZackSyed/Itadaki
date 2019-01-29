@groups.each do |group|
    json.extract! group, :id, :group_name
end 
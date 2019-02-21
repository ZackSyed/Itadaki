@tabs.each do |tab|
    json.set! tab.id do 
        json.extract! tab, :id, :name, :total, :created_at, :settled
    end
end
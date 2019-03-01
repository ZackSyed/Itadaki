@tabs.each do |tab|
    json.set! tab.id do 
        json.extract! tab, :id, :name, :total, :lender_id, :created_at, :settled
    end
end
class Api::SplitsController < ApplicationController 

    def index 
        @splits = Split.joins(:user).where(user_id: current_user.id) +
        (Split.joins(:tab).where(tabs: { lender_id: current_user.id }))
        if @splits 
            render :index
        else    
            render json: @splits.errors.full_messages
        end 
    end 
end 
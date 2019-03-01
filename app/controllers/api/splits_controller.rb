class Api::SplitsController < ApplicationController 

    def index 
        @splits = Split.joins(:users).where(user: {id: current_user.id})
        if @splits 
            render :index
        else 
            render json: @splits.errors.full_messages
        end 
    end 
end 
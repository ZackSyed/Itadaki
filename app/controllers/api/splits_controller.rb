class Api::SplitsController < ApplicationController 

    def index 
        @splits = Split.joins(:users).where(user: {id: current_user.id})
        render :index
    end 
end 
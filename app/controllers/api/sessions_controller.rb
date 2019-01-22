class Api::SessionsController < ApplicationController 

    def create
    credentials = [user_params[:username], user_params[:password]]
    @user = User.find_by_credentials(*credentials)
    # debugger
        if @user 
            login(@user)
            render "api/users/show" 
        else
            render json: ["Invalid credentials"], status: 401
        end
    end 

    def destroy 
        if current_user 
            # debugger
            logout
            render json: ["Goodbye"]
        else
            # debugger
            render json: {}, status: 404 if @user.nil?
        end
    end 
end 
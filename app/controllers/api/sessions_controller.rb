class Api::SessionsController < ApplicationController 

    def create
    credentials = [params[:user][:username], params[:user][:password]]
    @user = User.find_by_credentials(*credentials)
        if @user 
            login(@user)
            render "api/users/show" 
        else
            render json: ["Invalid credentials"], status: 401
        end
    end 

    def destroy 
        if current_user 
            logout
            render json: ["Goodbye"]
        else
            render json: {}, status: 404
        end
    end 

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end 
end 
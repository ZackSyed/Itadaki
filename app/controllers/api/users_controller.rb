class Api::UsersController < ApplicationController 
    
    def index 
        @users = User.all 
        render :show 
    end 

    def show 
        @user = User.find(id: params[:id])
        
    end 
    
    def create 
        @user = User.new(user_params)
        if @user 
            login(@user)
            render :show
        else 
            render json: @user.errors.full_messages, status: 404            
        end 
    end 

    def user_params 
        params.require(:user).permit(:username, :password)
    end 
end 
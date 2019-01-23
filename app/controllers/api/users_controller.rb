class Api::UsersController < ApplicationController 
    
    def index 
        @users = User.all 
        render :index 
    end 

    def show 
        @user = User.find(id: params[:id])
        render :show 
    end 
    
    def create 
        # debugger
        @user = User.new(user_params)
        # debugger
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
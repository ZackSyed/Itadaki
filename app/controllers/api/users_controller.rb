class Api::UsersController < ApplicationController 
    
    def index 
        @users = User.all 
        render :index 
    end 

    def show 
        @user = User.find(params[:id])
        render :show 
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

    def search
        if params[:username] 
            @user = User.find_by(username: params[:username])
        elsif params[:email]
            @user = User.find_by(email: params[:email])
        end

        if @user 
            render :search
        else 
            render json: ["Not a user"]
        end 
    end 

    def user_params 
        params.require(:user).permit(:username, :email, :password)
    end 
end 
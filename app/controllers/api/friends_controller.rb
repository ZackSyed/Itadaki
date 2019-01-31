class Api::FriendsController < ApplicationController 
     
    def index
        @friends = Friend.where({ user_id: current_user.id }).or({ friend_id: current_user.id })
        render :index 
    end  

    def show
        @friend = Friend.find(params[:id])
        render :show
    end 

    def create 
        @friend = Friend.new
        if params[:username] 
            user = User.find_by(username: params[:username])
            @friend.friend_id = user.id 
            @friend.user_id = current_user.id 
        elsif params[:email]
            user = User.find_by(email: params[:email])
            @friend.friend_id = user.id 
            @friend.user_id = current_user.id 
        end
        if @friend.save
            render :show
        else 
            render json: ["User does not exist/already a friend"]
        end 
    end 

    def friend_params 
        params.require(:friend).permit(:friend_id)
    end 
end 
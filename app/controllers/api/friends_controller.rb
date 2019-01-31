class Api::FriendsController < ApplicationController 
     
    def index
        @friends = Friend.where({ user_id: params[:currentUserId] })
        render :index 
    end  

    def show
        @friend = Friend.find(params[:id])
        render :show
    end 

    def create 
        @friend = Friend.new
        if params[:username] 
            @friend.friend_id = searchU(params[:username])
            @friend.user_id = current_user.id 
            @friend.save
            render :show
        elsif params[:email]
            @friend.friend_id = searchE(params[:email])
            @friend.user_id = current_user.id 
            @friend.save
            render :show
        else 
            render json: ["User does not exist/already a friend"]
        end 
    end 

    def friend_params 
        params.require(:friend).permit(:friend_id)
    end 
end 
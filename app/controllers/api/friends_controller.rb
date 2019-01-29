class Api::UsersController < ApplicationController 
     
    def index
        all_friends = Friend.all
        @friends = all_friends.select { |friend| friend.user_id == current_user.id }
        render :index @friends
    end  

    def show
        @friend = Friend.find(params[:id])
        render :show
    end 

    def create 
        @friend = Friend.new(friend_params)
        @friend.user_id = current_user.id 
        if @friend 
            render :index
        else 
            render json: @friend.errors.full_messages 
        end 
    end 

    def friend_params 
        params.require(:friend).permit(:friend_id)
    end 
end 
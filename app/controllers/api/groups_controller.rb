class Api::GroupsController < ApplicationController 

    def create 
        @group = Group.new(group_name: group_params[:group_name])
        if (@group.save && params[:group][:usernames])
            @group.create_interactions(params[:group][:usernames])
            Interaction.create(user_id: current_user.id, group_id: @group.id)
            render :show  
        elsif 
            Interaction.create(user_id: current_user.id, group_id: @group.id)
            render :show 
        else 
            render json: @group.errors.full_messages 
        end 
    end 

    def show 
        @group = Group.find(params[:id])
        if @group
            render :show
        else 
            render json: @group.errors.full_messages 
        end 
    end  

    def destroy  
        @group = Group.find(params[:id])
        @group.destroy!
        render :index 
    end   

    def index 
        @groups = Group.joins(:users).where(users: {id: current_user.id})
        render :index 
    end  

    def group_params 
        params.require(:group).permit(:group_name, :usernames)
    end 
end 
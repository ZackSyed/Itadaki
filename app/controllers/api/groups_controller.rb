class Api::GroupsController < ApplicationController 

    def create 
        @group = Group.create(group_params)
        if @group
            Interaction.create(user_id: current_user, group_id: @group.id)
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
        @groups = Group.all 
        render :index 
    end  

    def group_params 
        params.require(:group).permit(:group_name)
    end 
end 
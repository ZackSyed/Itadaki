class Api::GroupsController < ApplicationController 

    def create 
        @group = Group.new(group_params)
        if @group
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
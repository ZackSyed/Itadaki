class  Api::TabsController < ApplicationController 

    def create 
        @tab = Tab.new(name: tab_params[:name], total: tab_params[:total])
        @tab.lender_id = current_user.id 
        group = Group.find_by(group_name: tab_params[:group_name])
        if !group 
            g2 = Group.create(group_name: tab_params[:group_name])
            @tab.group_id = g2.id
        else 
            @tab.group_id = group.id
        end 

        if @tab.save 
            render :show
        else 
            render json: @tab.errors.full_messages
        end 
    end 

    def show 
        @tab = Tab.find(params[:id])
        if @tab 
            render :show
        else 
            render json: @tab.errors.full_messages
        end 
    end 

    def index 
        @tabs = Tab.where()
    end 


    def tab_params 
        params.require(:tab).permit(:name, :total, :group_name)
    end 
end 
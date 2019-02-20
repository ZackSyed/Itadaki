class  Api::TabsController < ApplicationController 

    def create 
        @tab = Tab.new(tab_params)
        @tab.lender_id = current_user.id 
        group = Group.find_by(group_name: params[:tab][:group_name])
        if !group 
            g2 = Group.create(group_name: params[:tab][:group_name])
            @tab.group_id = g2.id
        else 
            @tab.group_id = group.id
        end 

        if @tab.save 
            render :show
            Split.create(tab_id: @tab.id, user_id: current_user.id)
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
        params.require(:tab).permit(:name, :total)
    end 
end 
class  Api::TabsController < ApplicationController 

    def create 
        debugger
        @tab = Tab.new(tab_params)
        @tab.lender_id = current_user.id 
        group = Group.find_by(group_name: params[:tab][:group_name])
        debugger
        if !group 
            debugger
            g2 = Group.create(group_name: params[:tab][:group_name])
            @tab.group_id = g2.id
        else 
            @tab.group_id = group.id
        end 

        if @tab.save 
            debugger
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


    def tab_params 
        params.require(:tab).permit(:name, :total)
    end 
end 
class  Api::TabsController < ApplicationController 

    def create 
        @tab = Tab.new(tab_params)
        @tab.lender_id = current_user.id 
        @tab.group_id = Group.where(:group_name = params[:tab][:group_name]).id
        if !@tab.group_id 
            Group.create(:group_name = params[:tab][:group_name])
            @tab.group_id = Group.where(:group_name = params[:tab][:group_name]).id
        end 

        if @tab.save 
            render :show
        else 
            render json: @tab.errors.full_messages
        end 
    end 


    def tab_params 
        params.require(:tab).permit(:name, :total)
    end 
end 
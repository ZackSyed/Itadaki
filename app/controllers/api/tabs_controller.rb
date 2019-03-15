class  Api::TabsController < ApplicationController 

    def create 
        @tab = Tab.new(name: tab_params[:name], total: tab_params[:total])
        @tab.lender_id = current_user.id 
        group = Group.find_by(group_name: tab_params[:group_name])
        if !group || (!is_current_users(group.users))
            debugger
            g2 = Group.create(group_name: tab_params[:group_name])
            Interaction.create(group_id: g2.id, user_id: current_user.id)
            @tab.group_id = g2.id
        else 
            @tab.group_id = group.id
        end 
        if @tab.save 
            @tab.create_split
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
        @tabs = Tab.where(lender_id: grab_all_users)
        render :index
    end 

    def is_current_users(users)
        return false if (!users)
        debugger
        users.each do |user|
            if user.username === current_user.username
                return true 
            end 
        end 

        return false
    end 

    def grab_all_users 
        all_groups = Group.joins(:users).where(users: {id: current_user.id})
        my_groups = Group.where(id: all_groups.ids)

        users = []
        my_groups.each do |group|
            users.push(group.users.ids)
        end 

        return users.flatten
    end 

    def tab_params 
        params.require(:tab).permit(:name, :total, :group_name)
    end 
end 
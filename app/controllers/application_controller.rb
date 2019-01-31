class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 

    def login(user)
        @current_user = user 
        session[:session_token] = @current_user.reset_token!
    end 

    def logged_in?
        !!current_user
    end 

    def searchU(username)
        @user = User.find_by(username: username)  
        return @user.id
    end 

    def searchE(email)
        @user = User.find_by(email: email)  
        return @user.id
    end

    def logout 
        current_user.reset_token!
        @current_user = nil 
        session[:session_token] = nil 
    end 

    def ensure_logged_in 
        redirect_to root unless logged_in
    end 
end

class SessionsController < ApplicationController
    #skip_before_action :authorize, only: [:create]

    def create 
        puts "Received username: #{params[:username]}"
        puts "Received password: #{params[:password]}"
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password]) #if user && user.authenticate is true
            session[:user_id] = user.id 
            render json: user, status: :created
        else 
            render json: { errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end
    
    def destroy 
        session.delete :user_id 
        head :no_content
    end
end

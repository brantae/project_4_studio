class UsersController < ApplicationController
    def create 
        user = User.create!(user_params)
        render json: user
    end

    private 

    #strong params 
    def user_params 
        params.permit(:username, :password)
    end
    
end

class UsersController < ApplicationController
    def index 
        users = User.all 
        render json: users, except: [:created_at, :updated_at]
    end

    def show 
        user = User.find(params[:id])
        render json: user, except: [:created_at, :updated_at]
    end

    private 

    #strong params 
    def user_params 
        params.permit(:username, :password)
    end
    
end

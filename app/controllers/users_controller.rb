class UsersController < ApplicationController

    def index 
        users = User.all 
        render json: users, except: [:created_at, :updated_at]
    end

    def show 
        user = User.find(params[:id])
        render json: user, except: [:created_at, :updated_at]
    end

    def create 
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created 
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private 

    #strong params 
    def user_params 
        params.permit(:name, :username, :password)
    end
    
end

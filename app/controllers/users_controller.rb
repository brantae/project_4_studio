class UsersController < ApplicationController

    def index 
        users = User.all 
        render json: users, except: [:created_at, :updated_at]
    end

    def create 
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created 
        else
            render_error_response
        end
    end

    private 

    def render_error_response
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end

    #strong params 
    def user_params 
        params.permit(:name, :username, :password)
    end
    
end

class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create 
        user = User.create!(user_params)
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

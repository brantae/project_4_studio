class UsersController < ApplicationController
    #skip_before_action :authorize, only: [:create, :show]

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    wrap_parameters format: []

    def index 
        user = User.all 
        render json: user
    end

    def show 
        user = User.find_by_id(session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end

    def create 
        user = User.create!(user_params)
        render json: user, status: :created 
    end

    private 

    def render_not_found_response 
        render json: { error: "User not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def user_params 
        params.permit(:name, :username, :password)
    end
    
end

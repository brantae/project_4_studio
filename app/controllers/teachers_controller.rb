class TeachersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    skip_before_action :authorize, only: :index

    def index 
        teachers = Teacher.all 
        render json: teachers
    end

    def show 
        teacher = Teacher.find(params[:id])
        render json: teacher
    end

    private

    def render_not_found_response
        render json: { error: "Teacher not found" }, status: :not_found
    end
end

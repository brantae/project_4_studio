class TeachersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    #skip_before_action :authorize, only: :index

    def index 
        teachers = Teacher.all 
        render json: teachers
    end

    def create 
        teacher = Teacher.create!(teacher_params)
        render json: teacher, status: :accepted
    end

    def show 
        teacher = Teacher.find(params[:id])
        render json: teacher
    end

    private

    def teacher_params 
        params.permit(:name, :specialty, :description)
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Teacher not found" }, status: :not_found
    end
end

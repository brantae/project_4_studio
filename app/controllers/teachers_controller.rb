class TeachersController < ApplicationController

    def index 
        teachers = Teacher.all 
        render json: teachers, except: [:created_at, :updated_at]
    end

    def show 
        teacher = Teacher.find(params[:id])
        if teacher
        render json: teacher, except: [:created_at, :updated_at]
        else
            render_not_found_response
        end
    end

    private

    def render_not_found_response
        render json: { error: "Teacher not found" }, status: :not_found
    end
end

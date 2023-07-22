class LessonsController < ApplicationController

    def index 
        lessons = Lesson.all 
        render json: lessons, except: [:created_at, :updated_at]
    end 

    def show 
        lesson = Lesson.find_by(id: params[:id])
        if lesson
            render json: lesson, except: [:created_at, :updated_at]
        else
            render_not_found_response
        end
    end

    private

    def render_not_found_response
        render json: { error: "Lesson not found" }, status: :not_found
    end
end

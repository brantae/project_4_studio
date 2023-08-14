class LessonsController < ApplicationController
    #skip_before_action :authorize, only: :index

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    wrap_parameters :lesson, include: [:room_num, :start_time, :teacher_id]



    def index 
        lessons = Lesson.all 
        render json: lessons
    end 

    def show 
        lesson = Lesson.find_by(id: params[:id])
        render json: lesson
    end

    def create 
        lesson = Lesson.create!(lesson_params)
        render json: lesson, status: :accepted
    end

    private

    def lesson_params 
        params.require(:lesson).permit(:room_num, :start_time, :teacher_id)
    end

    def render_not_found_response 
        render json: { error: "Lesson not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end

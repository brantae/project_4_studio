class LessonsController < ApplicationController
    #skip_before_action :authorize, only: :index

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    wrap_parameters format: []



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

    def update 
        lesson = Lesson.find_by(id: params[:id])
        
        lesson.update(lesson_params)
          formatted_time = lesson.start_time.strftime('%I:%M %p %Z')
          render json: { lesson: lesson, formatted_start_time: formatted_time }, status: :accepted

      end

    def destroy 
        lesson = Lesson.find_by(id: params[:id])
        lesson.destroy
    end

    private

    def lesson_params
        params.require(:lesson).permit(:room_num, :start_time, :teacher_id, :user_id) # Make sure to include any other permitted parameters
      end

    def render_not_found_response 
        render json: { error: "Lesson not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end

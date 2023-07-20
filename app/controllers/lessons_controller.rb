class LessonsController < ApplicationController

    def index 
        lessons = Lesson.all 
        render json: lessons, except: [:created_at, :updated_at]
    end 
end

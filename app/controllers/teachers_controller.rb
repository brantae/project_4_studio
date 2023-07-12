class TeachersController < ApplicationController

    def index 
        teachers = Teacher.all 
        render json: teachers, except: [:created_at, :updated_at]
    end

    def show 
        teacher = Teacher.find(params[:id])
        render json: teacher, except: [:created_at, :updated_at]
    end
end

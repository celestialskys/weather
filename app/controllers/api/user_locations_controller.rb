class Api::SessionsController < ApplicationController
    include Authentication
    allow_unauthenticated_access
    def create
        UserLocation.create!(user_id: Current.user.id, location_id: params[:location_id])
        head :no_content
    end

    def destroy
        location = UserLocation.find_by(location_id: params[:location_id], user_id: Current.user.id)
        if location.destroy
            render json: {destroyed: true}
        else
            render json: {destroyed: false}
        end
    end
end
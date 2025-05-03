class Api::UserLocationsController < ApplicationController
    include Authentication
    allow_unauthenticated_access
    def create
        Location.find_or_create_by(location_params)
        UserLocation.find_or_create_by!(user_id: Current.user.id, location_id: params[:location_id])
        head :no_content
    end

    def destroy
        byebug
        location = UserLocation.find_by(location_id: params[:local_id], user_id: params[:user_id])
        updated_locations = Location.where(user_id: params[:user_id])
        if location.destroy
            render json: {locations: updated_locations, destroyed: true}
        else
            render json: {destroyed: false}
        end
    end

    def location_params
        params.require(:location).permit([ :label, :country, :region, :zip, :lat, :lon, :timezone_id ], :user_id)
    end
end
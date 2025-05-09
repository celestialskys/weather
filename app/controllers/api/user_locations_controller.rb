class Api::UserLocationsController < ApplicationController
    include Authentication
    allow_unauthenticated_access
    def create
        Location.find_or_create_by(location_params)
        UserLocation.find_or_create_by!(user_id: Current.user.id, location_id: params[:location_id])
        head :no_content
    end

    def destroy
        location = UserLocation.find_by(location_id: params[:local_id], user_id: params[:user_id])
        updated_user_locations = UserLocation.where(user_id: params[:user_id]).select(:location_id)
        locations = Location.where(id: updated_user_locations.map(&:location_id))
        if location.destroy
            render json: {locations: locations, destroyed: true}
        else
            render json: {destroyed: false}
        end
    end

    def location_params
        params.require(:location).permit([ :label, :country, :region, :zip, :lat, :lon, :timezone_id ], :user_id)
    end
end
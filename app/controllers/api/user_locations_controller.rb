class Api::SessionsController < ApplicationController
    include Authentication
    allow_unauthenticated_access
    def create
        Location.find_or_create_by(location_params)
        UserLocation.find_or_create_by!(user_id: Current.user.id, location_id: params[:location_id])
        head :no_content
    end

    def destroy
        binding.pry
        location = UserLocation.find_by(location_id: params[:location_id], user_id: Current.user.id)
        if location.destroy
            render json: {destroyed: true}
        else
            render json: {destroyed: false}
        end
    end

    def location_params
        params.expect(location: [ :label, :country, :region, :zip, :lat, :lon, :timezone_id ], :user_id)
    end
end
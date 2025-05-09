class Api::LocationsController < ApplicationController
  include Authentication
  before_action :require_authentication

  # allow_unauthenticated_access
  before_action :set_location, only: %i[ update destroy ]

  def index
    @locations = Current.user.locations
    render json: @locations
  end

  def find_location
    @location = Location.search_attr(location_params)
    render json: @location
  end

  # POST /locations
  def create
    @location = Location.new(location_params)

    if @location.save
      render json: @location, status: :created, location: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /locations
  def update
    if @location.update(location_params)
      render json: @location
    else
      render json: @location.errors, status: :unprocessable_entity
    end
  end

  # DELETE /locations/1
  def destroy
    if @location.destroy
      render json: { locations: Current.user.locations, destroyed: true}
    else
      render json: @location.errors, destroyed: false
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location
      @location = Location.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def location_params
      params.expect(location: [ :label, :country, :region, :zip, :lat, :lon, :timezone_id ])
    end
end

class Api::WeatherController < ApplicationController
    include Authentication
    allow_unauthenticated_access only: :index
    def index
        # WeatherStack::Services::FetchWeather.new().perform({ path:"weather", weather: { "lon": "44.34", "lat":"44.34"} })
        @weather = WeatherStack::Services::FetchWeather.new().perform(weather_params)
        byebug
        render json: @weather
    end

    private

    def weather_params
        params.permit(:path, params: [:lon, :lat, :units])
    end
end
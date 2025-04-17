class Api::WeatherController < ApplicationController
    def index
        # WeatherStack::Services::FetchWeather.new().perform({ path:"weather", weather: { "lon": "44.34", "lat":"44.34"} })
        @weather = WeatherStack::Services::FetchWeather.new().perform(weather_params)
        byebug
        render json: @weather
    end
   
    private

    def weather_params
    params.require(:weather).permit(:path, params: [:lon, :lat])
    end
end
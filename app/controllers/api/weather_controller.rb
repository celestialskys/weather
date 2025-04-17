class Api::WeatherController < ApplicationController
    def current_weather
       @weather = WeatherStack::Services::FetchWeather.new().perform({ params: {path:"current", "query": params[:query]} })
    end

    def future_weather
    end
end
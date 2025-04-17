class Api::WeatherController < ApplicationController
    def weather
              # WeatherStack::Services::FetchWeather.new().perform({ path:"weather", weather: { "lon": "44.34", "lat":"44.34"} })
       @weather = WeatherStack::Services::FetchWeather.new().perform({ path:params[:path], { params: params[:weather] }})
    end
   
end
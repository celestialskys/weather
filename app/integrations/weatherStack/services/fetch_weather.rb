module WeatherStack
  module Services
    class FetchWeather
      def initialize(params ={})
      end

      # WeatherStack::Services::FetchWeather.new().perform({ path:"current", params: { "query": "London"} })
      # WeatherStack::Services::FetchWeather.new().perform({ path:"weather", params: { "lon": "44.34", "lat":"44.34"} })
     
      def perform(options ={})
        access_token_result = Rails.application.credentials.open_weather_map
        return access_token_result if access_token_result.empty?
        weather_results = get_weather(access_token_result, options)
        if weather_results[:success] == false
          return {success: false, errors: ["Couldnt fetch weather"]}
        end
        return {success: true, data: weather_results}
      end

      def get_weather(access_token, options = {})
        WeatherStack::Forecast.new(access_token: access_token).get_forcast(options)
      end
    end
  end
end
module WeatherStack
  module Services
    class FetchWeather
      def initialize(params ={})
      end

      def perform(options ={})
        access_token_result = Rails.application.credentials.weather_stack
        return access_token_result if access_token_result.none?

        weather_results = get_weather(access_token_result, options)
        if weather_results[:success] == false
                    return {success: false, errors: ["Couldnt fetch weather"]}
        end

        return {success: true, data: weather_results}
      end
    end
  end
end
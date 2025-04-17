module WeatherStack
  class Forecast < Base
  
    def get_forcast(options={})
      if options[:use_open].blank?
        options[:use_open] = true;
      end

      params ={
        # access_key: @access_token //for weatherstack
        appid: @access_token, #for openweathermap
      }.merge( options[:params] || {})
      result = request(options[:use_open], :get, options[:path], { params: params })
    
      parsed_result = IntegrationsBase.parse_json_response(result)
      return parsed_result if parsed_result[:success]

      if result.status.success?
        return {
          success: true,
          data: parsed_result[:success]
        }
      end

      return {
        success: false,
        data: parsed_result[:errors]
      }
    
    end
  end
end
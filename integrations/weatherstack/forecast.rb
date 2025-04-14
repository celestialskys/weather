module WeatherStack
  class Forcast < Base
  
    def get_weather(options={})
          
      result = request(:get, { params: options[:params] || {}})
    
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
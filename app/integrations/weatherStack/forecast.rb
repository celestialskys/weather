module WeatherStack
  class Forecast < Base
  
    def get_forcast(options={})
      
      params ={
        access_key: @access_token
      }.merge( options[:params] || {})
      
      # byebug
      result = request(:get, params[:path], { params: params })
    
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
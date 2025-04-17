module WeatherStack
  class Base
    def initialize(params ={})
      @access_token = params[:access_token]
    end

    def base_url_openweathermap
      "https://api.openweathermap.org/data/2.5/"
    end

    def base_url_weatherstack
      "http://api.weatherstack.com/"
    end

    def base_url(use_open = true)
      if use_open.present? && use_open == true
        base_url_openweathermap()
      else
        base_url_weatherstack()
      end
    end

    def request(use_open, method, path, options=[])
      HTTP.auth("HTTP Req")
        .use(logging: {logger: Logger.new(STDOUT)})
        .headers({
          "User-Agent" => "Clipflow"
        })
        .send(method, request_url(path, use_open), params: options[:params])
    end

    def request_url(path, use_open)
        "#{base_url(use_open)}#{path}"
    end

  end
end
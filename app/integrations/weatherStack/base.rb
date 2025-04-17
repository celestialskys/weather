module WeatherStack
  class Base
    def initialize(params ={})
      @access_token = params[:access_token]
    end

    def base_url
      "http://api.weatherstack.com/"
    end

    def request(method, path, options=[])
      HTTP.auth("HTTP Req")
        .use(logging: {logger: Logger.new(STDOUT)})
        .headers({
          "User-Agent" => "Clipflow"
        })
        .send(method, request_url(path), params: options[:params])
    end

    def request_url(path)
        "#{base_url}#{path}"
    end
  end
end
module WeatherStack
  class Base
    def initialize(params ={})
      @accesstoken = params[:accesstoken]
    end

    def base_url
      "http://api.weatherstack.com/"
    end

    def request(method, path, options=[])
      HTTP.auth("Bearer #{@accesstoken}")
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
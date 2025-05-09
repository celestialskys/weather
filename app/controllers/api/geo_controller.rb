require 'net/http'
require 'uri'

class Api::GeoController < ApplicationController
    allow_unauthenticated_access
  def cities
    query = params[:query] || 'calif'
    url = URI("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=#{query}")

    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true

    request = Net::HTTP::Get.new(url)
    request["X-RapidAPI-Key"] = '8948f238c8msh27f41cf5ee716b7p18ae3cjsnd6bbc1d2f5ce'
    request["X-RapidAPI-Host"] = "wft-geo-db.p.rapidapi.com"
    response = http.request(request)
    render json: JSON.parse(response.body)
  end
end

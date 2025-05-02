class MainController < ApplicationController
    allow_unauthenticated_access only: :index
    def index
    #     redirect_to dashboard if authenticated?
    end

    def dashboard
        redirect_to api_login_path unless authenticated?
    end
end
class MainController < ApplicationController
    allow_unauthenticated_access only: :index
    def index
    #     redirect_to dashboard if authenticated?
    end

    def dashboard
        redirect_to new_session_path unless authenticated?
    end
end
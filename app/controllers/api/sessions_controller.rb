class Api::SessionsController < ApplicationController
  include Authentication

  allow_unauthenticated_access only: %i[ new create check_session]
  rate_limit to: 10, within: 3.minutes, only: :create, with: -> { redirect_to new_session_url, alert: "Try again later." }

  def new
  end

  def create
    if @user = User.authenticate_by(params.permit(:email_address, :password))
      start_new_session_for @user
      render json: { user: @user, session_token: Current.session.id, authenticated: true }
    else
      redirect_to api_login_path, alert: "Try another email address or password."
    end
  end

  def check_session
    Rails.logger.info "Cookie received: #{cookies.signed[:session_id]}"

    if authenticated?
      render json: {
        authenticated: true,
        user: Current.session.user.slice(:id, :email, :firstname, :lastname),
        session_token: Current.session
      }
    else
      render json: { authenticated: false }, status: :unauthorized
    end
  end

  def destroy
    terminate_session
    redirect_to api_login_path
  end
end

class Api::SessionsController < ApplicationController
  include Authentication
  skip_before_action :verify_authenticity_token

  allow_unauthenticated_access only: %i[ new create check_session]
  rate_limit to: 10, within: 3.minutes, only: :create, with: -> { redirect_to new_session_url, alert: "Try again later." }

  def new
  end

  # def test
  #   cookies[:test_cookie] = {
  #     value: '12345',
  #     secure: true,
  #     same_site: :none
  #   }
  #   render json: { ok: true }
  # end

  # def create
  #   if @user = User.authenticate_by(params.permit(:email_address, :password))
  #     start_new_session_for(@user)
  #     render json: { user: @user, session_token: Current.session.id, authenticated: true }
  #   else
  #     redirect_to api_login_path, alert: "Try another email address or password."
  #   end
  # end
  def create
    user = User.find_by(email_address: params[:email_address])
  
    if user&.authenticate(params[:password])
      session = start_new_session_for(user)
      render json: {
        user: user,
        session_token: session.id,  # This becomes the client-side auth token
        authenticated: true
      }
    else
      render json: { error: 'Invalid credentials' }, status: :unauthorized
    end
  end

  def check_session
    if authenticated?
      render json: {
        authenticated: true,
        user: Current.session.user.slice(:id, :email_address, :firstname, :lastname),
        session_token: Current.session.id
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

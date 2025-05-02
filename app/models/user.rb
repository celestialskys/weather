class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy
  attr_reader :password
  has_many :user_locations
  has_many :locations, through: :user_locations
  validates :password, presence: true, length: { minimum: 6 }, if: -> { password.present? }

  normalizes :email_address, with: ->(e) { e.strip.downcase }

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end

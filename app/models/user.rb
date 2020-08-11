# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#
class User < ApplicationRecord
  has_secure_password
  validates :username, :session_token, presence: true, uniqueness: true 
  after_initialize :ensure_session_token

  has_many :todos, dependent: :destroy
  has_many :steps,
           through: :todos,
           source: :steps

  def ensure_session_token
    self.session_token = SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    update!(session_token: SecureRandom::urlsafe_base64)
    session_token
  end

end

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable,
         :validatable, :omniauthable, omniauth_providers: [:facebook, :vkontakte]

  has_many :questions
  has_many :answers
  has_many :votes
  has_many :authorizations
  has_one :avatar

  def self.find_for_oauth(auth)
    authorization = Authorization.where(provider: auth.provider, uid: auth.uid.to_s).first
    return authorization.user if authorization
    password = Devise.friendly_token[0, 20]
    email = auth.uid.to_s + '@' + auth.provider + '.com'
    user = User.create!(email: email, password: password, password_confirmation: password, confirmed_at: Time.now)
    user.create_authorization(auth)
    user
  end

  def create_authorization(auth)
    self.authorizations.create(provider: auth.provider, uid: auth.uid)
  end

end

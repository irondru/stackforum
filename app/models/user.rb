class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :confirmable,
         :validatable, :omniauthable, omniauth_providers: [:facebook, :vkontakte]

  has_many :questions
  has_many :answers
  has_many :votes

end

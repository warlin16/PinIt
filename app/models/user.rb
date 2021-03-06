class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true

  has_attached_file :avatar, default_url: "temp.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/


  attr_reader :password
  after_initialize :ensure_session_token

  has_many :boards,
    class_name: 'Board',
    foreign_key: :author_id,
    dependent: :destroy

  has_many :pins,
    class_name: 'Pin',
    foreign_key: :author_id,
    dependent: :destroy

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end

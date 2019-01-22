class User < ApplicationRecord 
    validates :username, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_null: true }
    validates :email, allow_null: true 
    validate :valid_email?

    after_initialize :ensure_session_token, :valid_email?
    attr_reader :password

    def valid_email?(self.email)
        if (self.email.nil?) 
            return true 
        else 
           email_check = self.email.split('@');
           return true if email_check.length == 2
        end 
        false 
        errors.add(:email, "Not a valid email")
    end 

    def find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password) 
            user 
        else 
            nil 
        end 
    end 

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def reset_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save
        self.session_token
    end 

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end 
end

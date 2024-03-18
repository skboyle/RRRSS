class FeedItem < ApplicationRecord
    validates :read, inclusion: { in: %w[Read Unread] }
  
    before_validation :set_default_read_status
  
    private
  
    def set_default_read_status
      self.read ||= 'Unread'
    end
  end
require 'rails_helper'

RSpec.describe FeedItem, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      feed_item = FeedItem.new(title: "Example Title", description: "Lorem ipsum", link: "http://example.com")
      expect(feed_item).to be_valid
    end
  end
end
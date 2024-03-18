FactoryBot.define do
    factory :feed_item do
      title { "Local Resident Passes RSpec Test" }
      description { "Wow what a story!" }
      publication_date { "Tue, 12 Mar 2024 13:00:00.000000000 UTC +00:00" }
      read { 'Unread' }
      created_at { "Tue, 12 Mar 2024 13:51:49.962028000 UTC +00:00" }
      updated_at { "Tue, 12 Mar 2024 15:53:27.055841000 UTC +00:00" }
      link { "https://tech.slashdot.org/story/24/03/12/123456/Local%20Resident%20Passes%20RSpec%20Test?utm_source=rss1.0mainlinkanon&utm_medium=feed" }
      creator { "BeauHD" }
      subject { "Coding" }
      department { "mission-accomplished" }
      section { "technology" }
      comments { 7 }
      hit_parade { "7,6,4,4,2,2,0" }
    end
  end
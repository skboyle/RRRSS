require 'rss' # Make sure to include this line to require the RSS library

class RssFeed
  FEED_URL = 'https://rss.slashdot.org/Slashdot/slashdotMain'.freeze

  def call
    feed = RSS::Parser.parse(FEED_URL)
    feed.items.each do |item|
      FeedItem.create!(
        title: item.title,
        description: item.description,
        publication_date: item.date,
        read: 'Unread',
        link: item.link,
        creator: item.dc_creator,
        subject: item.dc_subject,
        department: item.slash_department,
        section: item.slash_section,
        comments: item.slash_comments,
        hit_parade: item.slash_hit_parade
      )
    end
  end
end

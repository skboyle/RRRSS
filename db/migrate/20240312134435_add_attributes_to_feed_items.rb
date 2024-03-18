class AddAttributesToFeedItems < ActiveRecord::Migration[7.1]
  def change
    add_column :feed_items, :link, :string
    add_column :feed_items, :creator, :string
    add_column :feed_items, :subject, :string
    add_column :feed_items, :department, :string
    add_column :feed_items, :section, :string
    add_column :feed_items, :comments, :integer
    add_column :feed_items, :hit_parade, :string
  end
end

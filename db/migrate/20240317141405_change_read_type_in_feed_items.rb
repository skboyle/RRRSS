class ChangeReadTypeInFeedItems < ActiveRecord::Migration[7.1]
  def change
    change_column :feed_items, :read, :string, default: 'Unread'
  end
end

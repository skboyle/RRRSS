class CreateFeedItems < ActiveRecord::Migration[7.1]
  def change
    create_table :feed_items do |t|
      t.string :title
      t.text :description
      t.datetime :publication_date
      t.boolean :read

      t.timestamps
    end
  end
end

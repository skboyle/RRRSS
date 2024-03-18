class FeedItemsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  before_action :find_feed_item, only: [:show, :update]

  def index
    @feed_items = FeedItem.all.order(publication_date: :desc)
    render json: @feed_items
  end

  def show
    render_feed_item_or_not_found
  end

  def update
    @feed_item = FeedItem.find(params[:id])
    if @feed_item.update(feed_item_params)
      render json: @feed_item
    else
      render json: @feed_item.errors, status: :unprocessable_entity
    end
  end

  private

  def feed_item_params
    params.require(:feed_item).permit(:read)
  end

  def find_feed_item
    @feed_item = FeedItem.find_by_id(params[:id])
  end

  def record_not_found
    render plain: 'Feed item not found', status: :not_found
  end

  def render_feed_item_or_not_found
    if @feed_item
      render json: @feed_item
    else
      record_not_found
    end
  end
end




require 'rails_helper'

RSpec.describe FeedItemsController, type: :controller do
  describe 'GET #index' do
    it 'returns a success response' do
      get :index
      expect(response).to be_successful
    end

    it 'assigns all feed items ordered by publication date' do
      feed_items = create_list(:feed_item, 3)
      get :index
      expect(assigns(:feed_items).to_a).to eq(feed_items.sort_by(&:publication_date))
    end
  end

  describe 'GET #show' do
    let(:feed_item) { create(:feed_item) }

    context 'when the feed item exists' do
      it 'returns a success response' do
        get :show, params: { id: feed_item.id }
        expect(response).to be_successful
      end

      it 'assigns the requested feed item' do
        get :show, params: { id: feed_item.id }
        expect(assigns(:feed_item)).to eq(feed_item)
      end
    end

    context 'when the feed item does not exist' do
      it 'returns a not found response' do
        get :show, params: { id: 'invalid_id' }
        expect(response).to have_http_status(:not_found)
      end

      it 'returns an error message' do
        get :show, params: { id: 'invalid_id' }
        expect(response.body).to eq('Feed item not found')
      end
    end
  end

  describe 'PATCH #update' do
    let(:feed_item) { create(:feed_item) }

    context 'with valid parameters' do
      it 'updates the requested feed item' do
        patch :update, params: { id: feed_item.id, feed_item: { read: 'Read' } }
        feed_item.reload
        expect(feed_item.read).to eq('Read') 
      end

      it 'returns a success response' do
        patch :update, params: { id: feed_item.id, feed_item: { read: 'Unread' } }
        expect(response).to be_successful
      end
    end

    context 'with invalid parameters' do
      it 'returns an unprocessable entity response' do
        feed_item = create(:feed_item)
        patch :update, params: { id: feed_item.id, feed_item: { read: 'invalid_value' } }
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it 'returns an error message' do
        patch :update, params: { id: feed_item.id, feed_item: { read: 'invalid_value' } }
        expect(JSON.parse(response.body)['read']).to include('is not included in the list')
      end
    end
  end
end




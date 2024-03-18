require 'rails_helper'

RSpec.describe 'Routes', type: :routing do
  describe 'GET /feed_items/index' do
    it 'routes to feed_items#index' do
      expect(get: '/feed_items/index').to route_to('feed_items#index')
    end
  end

  describe 'GET /' do
    it 'routes to feed_items#index' do
      expect(get: '/').to route_to('feed_items#index')
    end
  end

  describe 'GET /up' do
    it 'routes to rails/health#show' do
      expect(get: '/up').to route_to('rails/health#show')
    end
  end

  describe 'GET /feed_items/:id' do
    it 'routes to feed_items#show' do
      expect(get: '/feed_items/1').to route_to('feed_items#show', id: '1')
    end
  end

  describe 'PATCH /feed_items/:id' do
    it 'routes to feed_items#update' do
      expect(patch: '/feed_items/1').to route_to('feed_items#update', id: '1')
    end
  end

  describe 'PATCH /feed_items/:id/toggle_read' do
    it 'routes to feed_items#toggle_read' do
      expect(patch: '/feed_items/1/toggle_read').to route_to('feed_items#toggle_read', id: '1')
    end
  end
end

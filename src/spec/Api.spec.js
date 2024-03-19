import { fetchItems, fetchItemDetails, updateItemReadStatus } from '../services/api';

describe('API functions', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetchItems - success', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }],
    });

    const items = await fetchItems();

    expect(items).toEqual([{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }]);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/feed_items', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  test('fetchItemDetails - success', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: '1', title: 'Item 1' }),
    });

    const item = await fetchItemDetails('1');

    expect(item).toEqual({ id: '1', title: 'Item 1' });
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/feed_items/1', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  test('updateItemReadStatus - success', async () => {
    const callback = jest.fn();

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: '1', read: 'Read' }),
    });

    await updateItemReadStatus('1', 'Read', callback);

    expect(callback).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/feed_items/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ read: 'Read' }),
    });
  });
});

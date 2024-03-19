import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ItemDetails from '../components/ItemDetails';
import { fetchItemDetails } from '../services/api'; 

// Mock the fetchItemDetails function directly from the ItemDetails component
jest.mock('../services/api', () => ({
  fetchItemDetails: jest.fn().mockResolvedValue({
    id: '0',
    title: 'Sample Title',
    read: 'Unread',
  }),
  updateItemReadStatus: jest.fn(),
}));

test('renders loading text when unable to find item details', async () => {
  render(
    <MemoryRouter initialEntries={['/feed_items/1']}>
      <Routes>
        <Route path="/feed_items/:id" element={<ItemDetails />} /> {/* Ensure that the id parameter is correctly passed */}
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(fetchItemDetails).toHaveBeenCalledWith('1');
  });

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});








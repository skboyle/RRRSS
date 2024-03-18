import React from 'react';
import { render } from '@testing-library/react';
import ReadButton from '../components/ReadButton'; // Adjust the path as needed

// Mock item data
const mockItem = {
    id: '1',
    title: 'Sample Title',
    read: 'Unread'
};

// Mock update function
const mockUpdateRead = jest.fn();

describe('ReadButton Component', () => {
    it('renders button with correct read status', () => {
        const { getByText } = render(<ReadButton item={mockItem} onUpdateRead={mockUpdateRead} />);
        
        // Assert that the button text matches the item's read status
        expect(getByText(mockItem.read)).toBeInTheDocument();
    });
});

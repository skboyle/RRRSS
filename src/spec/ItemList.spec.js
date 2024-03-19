import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemList from '../components/ItemList';
import { updateItemReadStatus } from '../services/api'; 


jest.mock('../services/api');

describe('ItemList', () => {

  const mockItems = [
    { id: 1, subject: 'subject1', title: 'Title 1', read: 'Read', publication_date: '2024-03-17T12:00:00Z' },
    { id: 2, subject: 'subject2', title: 'Title 2', read: 'Unread', publication_date: '2024-03-18T12:00:00Z' },
  ];

  beforeEach(() => {
    updateItemReadStatus.mockClear();
  });

  test('renders list items', () => {
    render(
      <Router>
        <ItemList items={mockItems} />
      </Router>
    );
    
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 2')).toBeInTheDocument();
    expect(screen.getByText('Subject1 : 03/17/2024')).toBeInTheDocument();
    expect(screen.getByText('Subject2 : 03/18/2024')).toBeInTheDocument();
    expect(screen.getByText('Read')).toBeInTheDocument();
    expect(screen.getByText('Unread')).toBeInTheDocument();


  });

  test('updates read status when ReadButton is clicked', async () => {
    render(
      <Router>
        <ItemList items={mockItems} />
      </Router>
    );
    
    const readButton = screen.getByTestId(`read-button-${mockItems[0].id}`);
    fireEvent.click(readButton);
    
    expect(updateItemReadStatus).toHaveBeenCalledWith(mockItems[0].id, 'Unread', expect.any(Function));
  });
});

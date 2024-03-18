import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';


test('renders App component with site title', async () => {
  render(
      <App />
  );

  await waitFor(() => {
    expect(screen.getByText('/.Slashdot RSS Reader')).toBeInTheDocument();
  });

});

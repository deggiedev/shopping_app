import React from 'react';
import { screen, render } from '@testing-library/react';
import { Description } from './Description';
import { mockProduct } from '../../mockData';

describe('Description', () => {
  it('should render Description component with correct text from description', async () => {
    // Arrange
    render(<Description description={mockProduct.description}></Description>);

    // Act

    // Assert
    const description = screen.getByText(mockProduct.description);
    expect(description).toBeInTheDocument();
  });
});
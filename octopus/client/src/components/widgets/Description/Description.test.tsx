import React from 'react';
import { screen, render } from '@testing-library/react';
import { Description } from './Description';
import { mockData } from './Description.mockData';

describe('Description', () => {
  it('should render Description componet with correct text from description', async () => {
    // Arrange
    // const expectedDescription = mockData.description;
    render(<Description description={mockData.description}></Description>);

    // Act

    // Assert
    const description = screen.getByText(mockData.description);
    expect(description).toBeInTheDocument();
  });
});
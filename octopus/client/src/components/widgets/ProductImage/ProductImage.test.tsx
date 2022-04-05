import React from 'react';
import { screen, render } from '@testing-library/react';
import { ProductImage } from './ProductImage';
import { mockImage } from './ProductImage.mockData';

describe('ProductImage', () => {
  it('should render Header component with octopus logo and basket icon', async () => {
    // Arrange
    const expectedUrl = mockImage.src
    render(<ProductImage image={mockImage}></ProductImage>);

    // Act

    // Assert
    const image = screen.getByAltText('product image')
    expect(image).toHaveAttribute('src', expectedUrl)
  });
});
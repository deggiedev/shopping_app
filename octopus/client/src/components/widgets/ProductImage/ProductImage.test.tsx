import React from 'react';
import { screen, render } from '@testing-library/react';
import { ProductImage } from './ProductImage';
import { mockProduct } from '../../mockData';

describe('ProductImage', () => {
  it('should render Header component with octopus logo and basket icon', async () => {
    // Arrange
    const expectedUrl = mockProduct.imgUrl
    render(<ProductImage imageUrl={mockProduct.imgUrl}></ProductImage>);

    // Act

    // Assert
    const image = screen.getByAltText('product-image')
    expect(image).toHaveAttribute('src', expectedUrl)
  });
});
import React from 'react';
import { screen, render } from '@testing-library/react';
import { Header } from '.';

describe('Header', () => {
  it('should render Header componet with octopus logo and basket icon', async () => {
    // Arrange

    render(<Header></Header>);

    // Act

    // Assert
    const Octopuslogo = screen.getByTitle('Octopus Energy logo');
    expect(Octopuslogo).toBeInTheDocument();
    
    const BasketIcon = screen.getByTitle('Basket Icon');
    expect(BasketIcon).toBeInTheDocument();
  });
});

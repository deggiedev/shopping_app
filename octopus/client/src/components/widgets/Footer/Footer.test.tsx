import React from 'react';
import { screen, render } from '@testing-library/react';
import { Footer } from './Footer';
import { mockData } from './Footer.mockData';

describe('Header', () => {
  it('should render Footer correct company information', async () => {
    // Arrange

    render(<Footer></Footer>);

    // Act

    // Assert
    const companyInfo = screen.getByText(mockData.companyInfo);
    expect(companyInfo).toBeInTheDocument();
  });
});
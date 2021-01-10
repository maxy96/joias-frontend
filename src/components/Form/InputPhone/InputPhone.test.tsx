import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputPhone from './InputPhone';

describe('<InputPhone />', () => {
  test('it should mount', () => {
    render(<InputPhone />);
    
    const inputPhone = screen.getByTestId('InputPhone');

    expect(inputPhone).toBeInTheDocument();
  });
});
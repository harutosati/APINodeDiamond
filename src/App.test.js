// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders APINodeDiamond title', () => {
    render(<App />);
    const titleElement = screen.getByText(/APINodeDiamond/i);
    expect(titleElement).toBeInTheDocument();
});

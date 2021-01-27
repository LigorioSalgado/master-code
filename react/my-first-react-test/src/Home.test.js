// ESTE ES UN COMPONENT TEST
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Test del componente Home',() => {
    it('Render test del home', () => {
        render(<Home />);
        // screen.debug();
    });

    // Buscar un elemento dentro del DOM
    it('Render test home with Search component', () => {
        render(<Home />)
        const label = screen.getByText('Search:');
        expect(label).toBeInTheDocument();
    });

    // Escribir en un input
});


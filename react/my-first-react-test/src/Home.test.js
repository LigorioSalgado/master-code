// ESTE ES UN COMPONENT TEST
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';
import Search from './Search';

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

    // Modifica el objeto input
    it('Test para escribir en un input', () => {
        render(<Home />)
        const input = screen.getByTestId('idTestSearch');
        // change ==> en donde va a escribir, lo que va a escribir
        fireEvent.change(input, {
            target: {
                value: 'una busqueda más'
            }
        })
    });

    // Detectar que se detone correctamente el onChange
    it('Detectar que se detone correctamente el onChange en el componenete Search', () => {

        // Esto es una mock de una función
        const funcionOnChangeFake = jest.fn(); // --> Hace una función vacia

        render(
            <Search
                value=""
                onChange={funcionOnChangeFake}
                titulo="Este es un titulo" />
        );
        
        const input = screen.getByTestId('idTestSearch');
        fireEvent.change(input, {
            target: { value: 'J' }
        });

        expect(funcionOnChangeFake).toHaveBeenCalledTimes(1);

    });

});


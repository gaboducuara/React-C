import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid.jsx/>', () => { 
    
    const category = 'One punch';

    test('debe de mostrar el Loading inicialmente' , () => {

        // implementacion de mocka
        useFetchGifs.mockReturnValue ({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe de mostrar items cuando se cargan las imagenes de useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        // implementacion de mocka
        useFetchGifs.mockReturnValue ({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={category}/>);
        expect( screen.getAllByRole('img').length).toBe(2);
    });
});
import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
const { shallow } = require("enzyme");
const { GifGrid } = require("../../components/GifGrid");
jest.mock('../../hooks/useFetchGifs');

describe('', () => {
    const category = 'Transformers';

    test('debe mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar los items cuando se cargan las imagenes de useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/asda.jpg',
            title: 'Cualquiera',
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('p').exists() ).toBe(false);

        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });



});
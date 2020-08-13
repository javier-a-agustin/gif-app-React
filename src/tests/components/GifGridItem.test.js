const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")
import React from 'react';

describe('Puebas en <GitGridItem />', () => {
    const title = 'Titulo';
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow( <GifGridItem title={title} url={url} /> );

    test('debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe tener un <h3> con el title', () => {
        const h3 = wrapper.find('h3');
        expect( h3.text().trim() ).toBe( title );
    });

    test('debe tener la imagen igual al url y al igual al titulo', () => {
        const img = wrapper.find('img');
        const src = img.prop('src');
        const alt = img.prop('alt');

        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });

    test('el div debe tener la clase card', () => {
        const div = wrapper.find('div');
        
        expect( div.prop('className').includes('card') ).toBe( true );
    })

});
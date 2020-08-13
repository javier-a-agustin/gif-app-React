import React from 'react';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas en GifExpertApp', () => {

    test('debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar una lista de categoras', () => {
        const categories = ['Adventure', 'Transformers'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} /> );
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    })

});
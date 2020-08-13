import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require("enzyme")
const { AddCategory } = require("../../components/AddCategory")


describe('Pruebas en AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> ); 

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> ); 


    });

    test('debe mostrar el componenete correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: {value}});
    });

    test('no debe postear la informacion on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe llamar setCategories y limpiar la caja de texto', () => {
        const value = 'Hola mundo';
        wrapper.find('input').simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect( setCategories ).toHaveBeenCalled();

        expect( wrapper.find('input').prop('value') ).toBe('');
    })

});
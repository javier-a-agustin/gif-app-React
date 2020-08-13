import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    //const [categories, setCategories] = useState(['Adventure']);
    const [categories, setCategories] = useState(defaultCategories);


    return(
        <>
            <h2>Gifs</h2>

            <AddCategory setCategories={ setCategories }/>
            <hr></hr>
           
            <ul>

                {
                    categories.map( category => (
                        <GifGrid key={ category } category={ category }/>
                    ))
                }

            </ul>
        </>
    );
};

export default GifExpertApp;
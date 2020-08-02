import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Adventure']);

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
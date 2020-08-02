import React from 'react';

export const GifGridItem= ( {id, title, url} ) => {

    return (
        <div className='card'>
            <h3>{title}</h3>
            <img src={url} alt={title}/>
        </div>
    )
}
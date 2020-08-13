import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem= ( {title, url} ) => {

    return (
        <div className='card'>
            <h3>{title}</h3>
            <img src={url} alt={title}/>
        </div>
    );
};

GifGridItem.propTypes = {
    title: PropTypes.string.isRequire,
    url: PropTypes.string.isRequired,
}
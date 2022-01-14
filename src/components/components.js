import React from 'react';
import './components.css'

const Components = (props) => {
    return (
        <div className='components'>
            <div className='components-first1'>
                <img className='components-img' src={props.FlowerName.imgUrl}/>
                <h2 className='components-text'>{props.FlowerName.name}</h2>
            </div>
            <div className='components2'>
                <h2 className='components-text'> type: {props.type}</h2>
                <h2  className='components-text'> price: ${props.price}</h2>
            </div>
        </div>
    );
};

export default Components;

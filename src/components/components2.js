import React from 'react';

function Components2(props) {
    return (
        <div>
            <div className='components2'>
                <h2 className='components-text'> type: {props.type}</h2>
                <h2  className='components-text'> price: ${props.price}</h2>
            </div>
        </div>
    );
}

export default Components2;
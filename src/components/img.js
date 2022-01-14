import React from 'react';

function Img(props) {
    return (
        <div>
             <img className='components-img' src={props.FlowerName.imgUrl}/>
        </div>
    );
}

export default Img;
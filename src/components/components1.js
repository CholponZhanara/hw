import React from 'react';
import Img from './img';



function Components1(props) {
    return (
        <div>
              <div className='components-first1'>
               <Img FlowerName={props.FlowerName}/>
                <h2 className='components-text'>{props.FlowerName.name}</h2>
            </div>
        </div>
    );
}

export default Components1;
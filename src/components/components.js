import React from 'react'
import './components.css'
import Components1 from './components1'
import Components2 from './components2'

const Components = (props) => {
	return (
		<div className='components'>
			<Components1 FlowerName={props.FlowerName} />
			<Components2 type={props.type} price={props.price} />
		</div>
	)
}

export default Components

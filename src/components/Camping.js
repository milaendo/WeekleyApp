import React, { Component } from 'react'
import {campingData} from '../data'

class Camping extends Component {
	render () {
		return (
			<div>
				<h2>Camping Stuff</h2>
				<div className='items'>
					
					{campingData.map((item, i) => (
						<div className='campingWrap' key={"item" + i}>
							<h3>{item.name}</h3>
							<div> {item.title} <br/> {item.price}</div>
							<div> <a href={item.link}>Learn More</a></div>
						</div>
					))}
					
				</div>
			</div>
		)
	}
}

export default Camping
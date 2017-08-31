import React, { Component } from 'react'
import {hikingData} from '../data'

class Hiking extends Component {
	render () {
		return (
			<div>
				<h2>Hiking Stuff</h2>
				<div className='items'>
					
					{hikingData.map((item, i) => (
						<div className='hikingWrap' key={"item" + i}>
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

export default Hiking
import React, { Component } from 'react'
import {coolData} from '../data'

class CoolThings extends Component {
	render () {
		return (
			<div>
				<div className='items'>
						
						{coolData.map((item, i) => (
							<div className='campingWrap' key={"item" + i}>
								<img className='cool'alt='cat'src={item.pic}/>
								<img className='cool'alt='doggo'src={item.pic2}/>
								<img className='cool'alt='doggaroonie'src={item.pic3}/>
							</div>
						))}
						
				</div>
			</div>
		)
	}
}

export default CoolThings
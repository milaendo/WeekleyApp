import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
	render () {
		return (
			<div className='homeWrap'>
				<h1>Coding Outfitters</h1>
				<img id='mainPic'alt="mountains" src="http://i2.cdn.cnn.com/cnnnext/dam/assets/170407220921-07-iconic-mountains-pitons-restricted-super-169.jpg"/>
				<p>Your one stop to buy all things outdoor, while you code</p>
				<Link to='/Contact'>More about us</Link>
			</div>
		)
	}
}

export default Home
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

class BaseLayout extends Component {
	render () {
		return (
			<div className='fullWrap'>
				<div className='nav'>
					<h1><NavLink exact activeClassName='active' to='/'>Coding Outfitters</NavLink></h1>
					<div className='floated'>
						<NavLink activeClassName='active' to='/About'>About</NavLink>
						<NavLink activeClassName='active' to='/Contact'>Contact</NavLink>
					</div>
					<NavLink activeClassName='active' to='/Camping'>Camping</NavLink>
					<NavLink activeClassName='active' to='/Hiking'>Hiking</NavLink>
					<NavLink activeClassName='active' to='/CoolThings'>CoolThings</NavLink>
				</div>
				{this.props.children}
			</div>
		)
	}
}

export default BaseLayout
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import About from './components/About'
import Contact from './components/Contact'
import Camping from './components/Camping'
import Hiking from './components/Hiking'
import CoolThings from './components/CoolThings'
import Home from './components/Home'

ReactDOM.render(
	<Router>
		<BaseLayout>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/About' component={About} />
				<Route path='/Contact' component={Contact} />
				<Route path='/Camping' component={Camping} />
				<Route path='/Hiking' component={Hiking} />
				<Route path='/CoolThings' component={CoolThings} />
			</Switch>
		</BaseLayout>
	</Router>
, document.getElementById('root'));
registerServiceWorker();

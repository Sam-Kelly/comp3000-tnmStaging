import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import T from './T'
import M from './M'
import N from './N'


class Intro extends React.Component {

	render() {
		if (true) { //serve them this thing if they havent gone through t, m, and n.
			return (
				<div>
					<div><img src={ require('./images/test.jpg') } /></div>
					<p> Change to test some stuff. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
					<div className="buttons">
						<Link to={process.env.PUBLIC_URL + '/t'}> <button type="button">T</button> </Link>
						<Link to={process.env.PUBLIC_URL + '/n'}> <button type="button">N</button> </Link>
						<Link to={process.env.PUBLIC_URL + '/m'}> <button type="button">M</button> </Link>
					</div>
				</div>
			);
		} else { // if they've been through t,n,m let them go on to the next stage.
			return (
				<p> need something here to keep compiler happy </p>
			);
		}
	}
}

export default Intro

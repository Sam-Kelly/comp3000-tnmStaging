import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class InteractiveElement extends React.Component {
	render() {
		return (
			<div><img src={ require('./images/test3.jpg') } /></div>
		);
	}
}

class T extends React.Component {

	render() {
		return (
			<div class="holder">
				<div class="75wid">
				<InteractiveElement />
					<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
					<div className="buttons">
						<Link to="/intro"> <button type="button">BACK</button> </Link>
					</div>
				</div>
		
				<div class="25wid">
				<div class="feedbackCircular">Yuss</div>
				<button class="feedbackText">Thingy</button>
				</div>
			</div>
			
			
		);
	}
}

export default T

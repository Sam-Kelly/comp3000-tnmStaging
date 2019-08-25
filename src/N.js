import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';



class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.t,
		};
		this.clicked=this.clicked.bind(this)
	}

	clicked() {
		this.setState({value: "X"})
	}

	render() {
		return (
			<button className="square" onClick={this.clicked}>
				{this.state.value}
			</button>
		);
	}
}



class DynamicContent extends React.Component {
	constructor(props) {
		super(props);
	}
	renderButton(text) {
		return (
			<Square t={text} />
		);
	}
	render() {
		return (
			<div className="buttons">
				{this.renderButton("click me")}
				{this.renderButton("click me")}
				{this.renderButton("click me")}
			</div>
		);
	}


}

class N extends React.Component {
	makeDynamicContent() {
		return (new DynamicContent);
	}

	render() {
		return (
			<div>
				<div><img src={ require('./images/test4.jpg') } /></div>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
				<div>
					<DynamicContent />
				</div>
				<div className="buttons">
					<Link to="/intro"> <button type="button">BACK</button> </Link>
				</div>
			</div>
		);
	}
}

export default N

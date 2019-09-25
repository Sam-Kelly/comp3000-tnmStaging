import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Fieldset, { withFieldset, withFullName } from 'react-fieldset';


class M extends React.Component {
	constructor(props) {
		super(props)
		this.state ={
			ans : 0,
		}
	}

	handleChoice(e) {
		console.log(e.target.value);
		//this.state.ans=e.target.value;
		this.setState({ans : e.target.value});
		this.updateResponse()
	}

	updateResponse() {
		let response;
		if (this.state.ans==0) {
			response = <p>Select a choice from the list above</p>
		}
		if (this.state.ans=="m0") {
			response = <p>M0 is not correct.</p>
		}
		if (this.state.ans=="m1") {
			response = <p>M1 is not correct.</p>
		}
		return response;

	}

	render() {
		let response;
		response = this.updateResponse();
		console.log("render");
		console.log(this.state.ans);
		return (
			<div>
				<h1>Metastasis (M)</h1>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				<div><img src={ require('./images/test6.jpg') } /></div>
				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

			<div>
				<Fieldset>
					<div><label htmlFor="sunday"><input type="radio" name="schedule-weekly-option" value="m0" id="m0" onChange={this.handleChoice.bind(this)} />M0</label></div>
					<div><label htmlFor="monday"><input type="radio" name="schedule-weekly-option" value="m1" id="m1" onChange={this.handleChoice.bind(this)} />M1</label></div>
				</Fieldset>
			</div>
			<div>
				{response}
			</div>
			<div className="buttons">
				<Link to="/intro"> <button type="button">BACK</button> </Link>
			</div>


			</div>
		);
	}
}

export default M

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
			response = <div style={{border:"2px solid green", margin:"2px", padding: "15px", clear:"left"}}>Good job! The abdominal CT is unremarkable – there is no indication of metastatic disease. M0 is correct.</div>
		}
		if (this.state.ans=="m1") {
			response = <div style={{border:"2px solid red", margin:"2px", padding: "15px", clear:"left"}}>Good try! The abdominal CT is unremarkable – there is no indication of metastatic disease. M1 is incorrect.</div>
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
				<div className="nav">
						<Link to={`/`}> <button type="button" className="col-sm-3">Intro</button> </Link>
						<Link to={`/t`}> <button type="button" className="col-sm-3">Tumour Stage (T)</button> </Link>
						<Link to={`/n`}> <button type="button" className="col-sm-3">Nodes Stage (N)</button> </Link>
						<Link to={`/m`}> <button type="button" className="col-sm-3">Metastasis Stage (M)</button> </Link>
				</div>

			<h3>Metastasis Stage (N)</h3>
			<p className="col-sm-12">Patricia’s abdominal CT is shown below. What is the value of “M”? Consider what the most common site of metastasis for colon cancer is. </p>
				
			<div><img src={ require('./images/test6.jpg') } /></div>
				
			<div>
				<Fieldset>
					<div><label htmlFor="m0"><input type="radio" name="schedule-weekly-option" value="m0" id="m0" onChange={this.handleChoice.bind(this)} />M0</label></div>
					<div><label htmlFor="m1"><input type="radio" name="schedule-weekly-option" value="m1" id="m1" onChange={this.handleChoice.bind(this)} />M1</label></div>
				</Fieldset>
			</div>
			<div>
				{response}
			</div>
		</div>
		);
	}
}

export default M

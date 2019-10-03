import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Fieldset, { withFieldset, withFullName } from 'react-fieldset';
import metastasisCT from './images/metastasisCT.png';

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
			response = <div style={{border:"2px solid green", margin:"2px", padding: "15px", clear:"left"}}>Good job! The abdominal CT is unremarkable – there is no indication of metastatic disease. M0 is correct. <br></br><br></br>Now that we know that T, N, and M, what is the overall stage of the cancer?</div>
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
						<Link to={process.env.PUBLIC_URL + '/intro'}> <button type="button" className="col-sm-3">Intro</button> </Link>
						<Link to={process.env.PUBLIC_URL + '/t'}> <button type="button" className="col-sm-3">Tumour Stage (T)</button> </Link>
						<Link to={process.env.PUBLIC_URL + '/n'}> <button type="button" className="col-sm-3">Nodes Stage (N)</button> </Link>
						<Link to={process.env.PUBLIC_URL + '/m'}> <button type="button" className="col-sm-3">Metastasis Stage (M)</button> </Link>
				</div>

			<h3>Metastasis Stage (M)</h3>
			<p className="col-sm-12">An abdominal CT is shown below. What is the value of “M”? Consider what the most common site of metastasis for colon cancer is. </p>
				
			<div><img src={metastasisCT} style={{ height: "500px"}}/></div>
				
			<div>
				<br></br>
				<Fieldset>
					<div><label htmlFor="m0"><input type="radio" name="option" value="m0" id="m0" onChange={this.handleChoice.bind(this)} />M0</label></div>
					<div><label htmlFor="m1"><input type="radio" name="option" value="m1" id="m1" onChange={this.handleChoice.bind(this)} />M1</label></div>
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

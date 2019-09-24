import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import Fieldset, { withFieldset, withFullName } from 'react-fieldset';

class T extends React.Component {

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
		if (this.state.ans=="t0") {
			response = <p>T0 is not correct.</p>
		}
		if (this.state.ans=="t1") {
			response = <p>T1 is not correct.</p>
		}
		if (this.state.ans=="t2") {
			response = <p>T2 is not correct.</p>
		}
		if (this.state.ans=="t3") {
			response = <p>T3 is not correct.</p>
		}
		if (this.state.ans=="t4") {
			response = <p>T4 is not correct.</p>
		}
		if (this.state.ans=="t5") {
			response = <p>T5 is not correct.</p>
		}
		return response;
	}

 render() {
	let response;
	response = this.updateResponse();

  return (
   <div>
    <h1>Tumor Stage (T)</h1>
    <p>The following diagram shows an example of a biopsy from a patient. Based on the areas highlighted, select the stage that you think best represents the tumour's current stage.</p>
    <div style={{ width: '500px', height: '500px' }}>
<PinchZoomPan>
<img src={ require('./images/T_cancer.jpg') } />
</PinchZoomPan>
    </div>
	<p>Image from <a href="https://www.best.edu.au/s/zi4ce6h3">https://www.best.edu.au/s/zi4ce6h3</a> </p>
	<p>Which stage is the tumor?</p>
	<div>
	<Fieldset>
		<div><label htmlFor="sunday"><input type="radio" name="schedule-weekly-option" value="t0" id="t0" onChange={this.handleChoice.bind(this)} />T0</label></div>
		<div><label htmlFor="monday"><input type="radio" name="schedule-weekly-option" value="t1" id="t1" onChange={this.handleChoice.bind(this)} />T1</label></div>
		<div><label htmlFor="tuesday"><input type="radio" name="schedule-weekly-option" value="t2" id="t2" onChange={this.handleChoice.bind(this)} />T2</label></div>
		<div><label htmlFor="wednesday"><input type="radio" name="schedule-weekly-option" value="t3" id="t3" onChange={this.handleChoice.bind(this)} />T3</label></div>
		<div><label htmlFor="wednesday"><input type="radio" name="schedule-weekly-option" value="t4" id="t4" onChange={this.handleChoice.bind(this)} />T4</label></div>
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

export default T

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import PinchZoomPan from "react-responsive-pinch-zoom-pan";
import Fieldset, { withFieldset, withFullName } from 'react-fieldset';
import ReactImageMagnify from 'react-image-magnify';

import scanImg1 from './images/T_cancer.jpg';
import mucosa from './images/mucosa.png';
import submucosa from './images/submucosa.png';
import muscularis from './images/muscularis.png';
import serosa from './images/serosa.png';

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
			response = <p>Select a choice from the list shown</p>
		}
		if (this.state.ans=="t0") {
			response = <div style={{border:"2px solid red", padding:"15px"}}>T0 is not correct. This layer is the mucosa. A tumour that invades into this layer is Tis (carcinoma in-situ).
			<br></br><img src={mucosa} style={{padding:"15px", width:"500px", height:"500px"}}></img>
			</div>
		}
		if (this.state.ans=="t1") {
			response = <div style={{border:"2px solid green", padding:"15px"}}>T1 is correct. This layer is the submucosa. A tumour that invades into this layer is T1.
			<br></br><img src={submucosa} style={{padding:"15px", width:"500px", height:"500px"}}></img>
			</div>
		}
		if (this.state.ans=="t2") {
			response = <div style={{border:"2px solid red", padding:"15px"}}>T2 is not correct. This layer is the muscularis propria. A tumour that invades into this layer is T2.
			<br></br><img src={muscularis} style={{padding:"15px", width:"500px", height:"500px"}}></img>
			</div>
		}
		if (this.state.ans=="t3") {
			response = <div style={{border:"2px solid red", padding:"15px"}}>T3 is not correct. This layer is the serosa / adventitia. A tumour that invades into this layer is T3.
			<br></br><img src={serosa} style={{padding:"15px", width:"500px", height:"500px"}}></img>
			</div>
		}
		if (this.state.ans=="t4") {
			response = <div style={{border:"2px solid red", padding:"15px"}}>T4 is not correct. A tumour that has grown through all the layers of the colon is T4. 
			<br></br><img src={serosa} style={{padding:"15px", width:"500px", height:"500px"}}></img>
			</div>
		}
		return response;
	}

 render() {
	let response;
	response = this.updateResponse();

  return (
   <div>
    
			
	<div className="nav">
		<Link to="/"> <button type="button" className="col-sm-3">Intro</button> </Link>
		<Link to="/t"> <button type="button" className="col-sm-3">Tumour Stage (T)</button> </Link>
		<Link to="/n"> <button type="button" className="col-sm-3">Nodes Stage (N)</button> </Link>
		<Link to="/m"> <button type="button" className="col-sm-3">Metastasis Stage (M)</button> </Link>
	</div>

	<h3>Tumour Stage (T)</h3>
	<p className="col-sm-12">The histopathology for Patricia’s cancer is shown below. What is the value of “T”?</p>
	
	<div class="row">	
		<div className="fluid col-sm-6">
        	<div className="fluid__image-container">
            	<ReactImageMagnify {...{
                smallImage: {
                alt: 'CT Scan of Patient',
                isFluidWidth: true,
                src: scanImg1,
                },
                largeImage: {
                src: scanImg1,
                width: 2560,
                height: 1900
                }
        	}} />
			</div>
   		</div>


		<div className="col-sm-12">
			<div>
				<p>Image from <a href="https://www.best.edu.au/s/zi4ce6h3">https://www.best.edu.au/s/zi4ce6h3</a> </p>
				<p>Which stage is the tumor?</p>
				<div>
				<Fieldset >
					<div><label htmlFor="t0"><input type="radio" name="schedule-weekly-option" value="t0" id="t0" onChange={this.handleChoice.bind(this)} />T0</label></div>
					<div><label htmlFor="t1"><input type="radio" name="schedule-weekly-option" value="t1" id="t1" onChange={this.handleChoice.bind(this)} />T1</label></div>
					<div><label htmlFor="t2"><input type="radio" name="schedule-weekly-option" value="t2" id="t2" onChange={this.handleChoice.bind(this)} />T2</label></div>
					<div><label htmlFor="t3"><input type="radio" name="schedule-weekly-option" value="t3" id="t3" onChange={this.handleChoice.bind(this)} />T3</label></div>
					<div><label htmlFor="t4"><input type="radio" name="schedule-weekly-option" value="t4" id="t4" onChange={this.handleChoice.bind(this)} />T4</label></div>
				</Fieldset>
				</div>
			</div>

			<div>
				{response}
			</div>
		</div>
	</div>

	

   </div>
  );
 }
}

export default T

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import PinchZoomPan from "react-responsive-pinch-zoom-pan";

class T extends React.Component {

	render() {
		return (
			<div>			
				<h1>Tumour Stage (T)</h1>
				<p className="col-sm-12">The following diagram shows an example of a biopsy from a patient. Based on the areas highlighted, select the stage that you think best represents the tumour's current stage.	
				</p>
				<div className="col-sm-8" style={{ background:"grey", padding: "5px", maxHeight:"500px", maxWidth:"100%", display:"inline-block"}}>
				
				<PinchZoomPan>
					<img src={ require('./images/T_cancer.jpg') } />
				</PinchZoomPan>

				</div>
				<div className="sidebar col-sm-4" style={{ background:"red", padding: "5px", 
				border: "5px solid black", minHeight:"500px", maxHeight:"500px", maxWidth:"100%"}}>

					<p>Select stage:</p><br></br><br></br>
					<button onClick="onCorrectClick" id="stageI">Stage I</button><br></br><br></br>
					<button id="stageII">Stage II</button><br></br><br></br>
					<button id="stageIII">Stage III</button><br></br><br></br>
					<button id="stageIV">Stage IV</button><br></br><br></br><br></br><br></br>

					<Link to="/intro"> <button style={{ padding: "5px", fontSize: "15px", textDecoration: "none",
					 color: "black", float: "none", border:"2px solid black"}} type="button">BACK</button> </Link>
				
				
				</div>
			</div>
		);
	}
}

export default T

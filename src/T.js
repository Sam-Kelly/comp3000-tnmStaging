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
				<h1>TNM Staging </h1>		
				<div className="nav">
						<Link to="/intro"> <button type="button" className="col-sm-3">Intro</button> </Link>
						<Link to="/t"> <button type="button" className="col-sm-3">Tumour Stage (T)</button> </Link>
						<Link to="/n"> <button type="button" className="col-sm-3">Nodes Stage (N)</button> </Link>
						<Link to="/m"> <button type="button" className="col-sm-3">Metastasis Stage (M)</button> </Link>
				</div>

				<h3>Tumour Stage (T)</h3>
				<p className="col-sm-12">The histopathology for Patricia’s cancer is shown below. What is the value of “T”?</p>
				
				<div className="sidebar col-sm-12" style={{padding: "5px", maxHeight:"500px", maxWidth:"100%"}}>
					<div>
						<span className="col-sm-2"></span>
							<button className="col-sm-3" id="stageI">Stage I</button>
						<span className="col-sm-2"></span>
							<button className="col-sm-3" id="stageII">Stage II</button>
						<span className="col-sm-2"></span>
					</div><br></br><br></br>
					<div>
						<span className="col-sm-2"></span>
							<button className="col-sm-3" id="stageIII">Stage III</button>
						<span className="col-sm-2"></span>
							<button className="col-sm-3" id="stageIV">Stage IV</button>
						<span className="col-sm-2"></span><br></br>
					</div>
				</div>

				<div className="col-sm-12" style={{ background:"grey", padding: "5px", maxWidth:"100%", display:"inline-block"}}>
				
				<PinchZoomPan>
					<img style={{ background:"grey"}} src={ require('./images/T_cancer.jpg') } />
				</PinchZoomPan>


				
				</div>
			</div>
		);
	}
}

export default T

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import T from './T'
import M from './M'
import N from './N'
import tick from './images/greenTick.png';


class Intro extends React.Component {

	completionMessage() {
		console.log(window.Tval);
		console.log(window.Ncomplete);
		console.log(window.Mval);
		if (window.Tval == "t1" && window.Ncomplete == 1 && window.Mval == "m0") {
			return <div><p>Congratulations, you have sucessfully completed the TNM staging process.</p><img src={tick} /></div>;
		} else {
			return <p>Please complete the T, N, and M portions of the app.</p>;
		}
	}

	render() {
		let completion;
		completion = this.completionMessage()
		if (true) { //serve them this thing if they havent gone through t, m, and n.
			return (
				<div>
					<p> 			
					The goal is to identify the TNM Stage of a cancer by working through T, N and M. In order to better illustrate the app's functionality, the cancer in this app differs from what is in the case. Click on the following to continue.
					</p>
					<div className="buttons">
						<Link to={process.env.PUBLIC_URL + '/t'}> <button type="button">Tumour (T)</button> </Link>
						<Link to={process.env.PUBLIC_URL + '/n'}> <button type="button">Nodes (N)</button> </Link>
						<Link to={process.env.PUBLIC_URL + '/m'}> <button type="button">Metastasis (M)</button> </Link>
					</div>
					{completion}
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

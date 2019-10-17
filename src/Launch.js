import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import FHIR from "fhirclient"

class Launch extends React.Component {

	render() {
		FHIR.oauth2.authorize({
			client_id: "tnm-staging",
			scope    : "patient/*.* launch"
		})
		return (
		<div>
		</div>
		);
	}
}

export default Launch

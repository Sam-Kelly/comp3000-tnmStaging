import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class N extends React.Component {

	render() {
		return (
			<div id="n-id">
				<img id="n-img" src={ require('./images/n.gif') } alt="lymph node image" /> 
				<svg id="n-svg" width="470" height="543">
				<NCircle id="n1" cx="163" cy="270" r="5" />
				<NCircle id="n2" cx="152" cy="272" r="5" />
				<NCircle id="n3" cx="140" cy="285" r="6" />
				<NCircle id="n4" cx="141" cy="307" r="5" />
				<NCircle id="n5" cx="142" cy="318" r="5" />
				<NCircle id="n6" cx="152" cy="314" r="5" />
				<NCircle id="n7" cx="146" cy="340" r="6" />
				<NCircle id="n8" cx="140" cy="356" r="6" />
				</svg>
			</div>
		); 
	}
}

class NCircle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: false, colour: "transparent"};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		var newToggleOnValue, newColourValue;
		newToggleOnValue = !this.state.isToggleOn;
		if(this.state.colour == "transparent") {
			newColourValue = "red"
		} else {
			newColourValue = "transparent"
		}
		this.setState({
			isToggleOn: newToggleOnValue,
			colour: newColourValue

		});
	  }

	render() {
		return (
		<circle id={this.props.id} className="n-circle" cx={this.props.cx}
		cy={this.props.cy} r={this.props.r} strokeWidth="1" fill={this.state.colour} onClick={this.handleClick} /> 
		);
	}
}

export default N

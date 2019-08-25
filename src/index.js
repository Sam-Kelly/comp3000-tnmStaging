import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Intro from './intro'
import T from './T'
import M from './M'
import N from './N'


class StagingApp extends React.Component {
	render() {
		return (
			<div>
			<Router>
				<div className="App">
				<Switch>
					<Route path="/" exact component={Index} />
					<Route path="/intro" component={Intro} />
					<Route path="/t" component={T} />
					<Route path="/n" component={N} />
					<Route path="/m" component={M} />
				</Switch>
				</div>
			</Router>
			</div>
		);
	}

}
class Index extends React.Component {

	render() {
		return(
			<div>
			<div><img src={ require('./images/test2.jpg') } /></div>
			<p> welcome to app Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
			<div className="buttons">
				<Link to='/intro'>
					<button type="button">click to begin</button>
				</Link>
			</div>
			</div>
		);
	} 
}

// ========================================

ReactDOM.render(
  <StagingApp />,
  document.getElementById('root')
);


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
					<Route exact path={process.env.PUBLIC_URL + '/'} component={Index} />
					<Route exact path={process.env.PUBLIC_URL + '/intro'} component={Intro} />
					<Route exact path={process.env.PUBLIC_URL + '/t'} component={T} />
					<Route exact path={process.env.PUBLIC_URL + '/n'} component={N} />
					<Route exact path={process.env.PUBLIC_URL + '/m'} component={M} />
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
			<p> 
			Welcome to the TNM Staging App!
			<br></br><br></br>
						
			</p>
			<div className="buttons">
				<Link to={process.env.PUBLIC_URL + '/intro'}>
					<button type="button">click to begin</button>
				</Link>
			</div>
			</div>
		);
	} 
}

// ========================================

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}><StagingApp /></Router>,
  document.getElementById('root')
);


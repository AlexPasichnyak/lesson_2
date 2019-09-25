import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './components/layouts/Page/Page';
import Home from './components/layouts/Pages/Home/Home'
import Content from './components/layouts/Pages/Content/Content';
import Tables from './components/layouts/Pages/Tables/Tables'
import './scss/App.scss'


class App extends Component {
	constructor(props) {
	  super(props);
	  this.history = createBrowserHistory();
	}

	render() {
	    return (
	        <Router history={this.history}>
		        <Page>
		        	<Switch>
			            <Route path='/' exact component={Home} />
			            <Route path='/content' component={Content} /> 
			            <Route path='/tables' exact strict component={Tables} /> 	        	
		        	</Switch>
		        </Page>
	        </Router>
	    );		
	}
}

export default App;
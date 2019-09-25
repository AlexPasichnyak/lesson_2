import React, {Component, Fragment} from 'react';
import Home from '../Home/Home'
import ContentView from './ContentView'

class Content extends Component {
	constructor(props) {
		super()
	}

	render() {
		return(
			<Fragment>
				<Home/>
				<ContentView/>
			</Fragment>
		)
	}
}

export default Content

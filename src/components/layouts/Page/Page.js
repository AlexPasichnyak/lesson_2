import React, {Component} from 'react'
import PageView from './PageView'

class Page extends Component {
	constructor(props) {
		super()
	}

	render() {
		return(
			<PageView>
				{this.props.children}
			</PageView>
		)
	}
}

export default Page
import React, { Component } from 'react';
import { element } from 'prop-types';
import PageView from './PageView';

class Page extends Component {
	static propTypes = {
  		children: element.isRequired
	};

  	constructor(props) {
	  super();
  	}

	render() {
  		const { children } = this.props;
  		return (
    		<PageView>
      			{children}
    		</PageView>
  		);
	}
}


export default Page;

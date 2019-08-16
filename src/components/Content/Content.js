import React, {Fragment} from 'react';
import ContentTop from './ContentTop/ContentTop'
import ContentTopBottom from './ContentTopBottom/ContentTopBottom'
import ContentBottomTop from './ContentBottomTop/ContentBottomTop'
import ContentBottom from './ContentBottom/ContentBottom'
import TableBio from './TableBio/TableBio'

const Content = () => {
	return (
		<Fragment>
			<ContentTop/>
			<ContentTopBottom/>
			<ContentBottomTop/>
			<ContentBottom/>
			<TableBio/>
		</Fragment>
	) 
}

export default Content;
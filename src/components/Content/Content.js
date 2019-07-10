import React, {Fragment} from 'react';
import ContentTop from './ContentTop/ContentTop'
import ContentTopBottom from './ContentTopBottom/ContentTopBottom'
import ContentBottomTop from './ContentBottomTop/ContentBottomTop'
import ContentBottom from './ContentBottom/ContentBottom'

const Content = () => {
	return (
		<Fragment>
           <ContentTop/>
           <ContentTopBottom/>
           <ContentBottomTop/>
           <ContentBottom/>
      	</Fragment>
	) 
}

export default Content;
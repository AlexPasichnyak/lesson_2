import React, {Fragment} from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
 
const PageView = (props) => {
	return(
		<Fragment>
			<Header />
				{props.children}
			<Footer />
		</Fragment>
	)
}

export default PageView
import React from 'react';

const WrapSection = (props) => {
	return(

		<section className="b-b pt-4 pb-4">
			{props.children}
		</section>
	)
}

export default WrapSection
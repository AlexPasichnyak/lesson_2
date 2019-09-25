import React from 'react'; 

const ImgLoad = (props) => {
	return(
		<div className="row justify-content-center">
			<img className="img-fluid w20" src={props.img} alt='img' onLoad={props.loadImg} onError={props.errImg} />
		</div>
	)
}

export default ImgLoad
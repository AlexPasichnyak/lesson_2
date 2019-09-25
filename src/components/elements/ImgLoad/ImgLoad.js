import React from 'react'; 

const ImgLoad = (props) => {
	return(
		<img className="img-fluid w20" src={props.img} alt='img' onLoad={props.loadImg} onError={props.errImg} />
	)
}

export default ImgLoad
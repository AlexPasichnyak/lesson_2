import React from 'react'; 
import PropTypes from 'prop-types';

const ImgLoad = ({ img, loadImg, errImg }) => {
  return (
    <div className="row justify-content-center">
      <img className="img-fluid w20" src={img} alt="img" onLoad={loadImg} onError={errImg} />
    </div>
  );
};

ImgLoad.propTypes = {
  img: PropTypes.string.isRequired,
  loadImg: PropTypes.func.isRequired,
  errImg: PropTypes.func.isRequired
};

export default ImgLoad;

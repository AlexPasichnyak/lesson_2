import React from 'react';
import { func, string } from 'prop-types';

const ImgLoad = ({ img, loadImg, errImg }) => {
  return (
    <img
      className="img-fluid w20"
      src={img}
      alt="img"
      onLoad={loadImg}
      onError={errImg}
    />
  );
};

ImgLoad.propTypes = {
  img: string.isRequired,
  loadImg: func.isRequired,
  errImg: func.isRequired
};

export default ImgLoad;

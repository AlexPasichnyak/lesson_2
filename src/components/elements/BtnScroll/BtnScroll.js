import React from 'react';
import { func, bool } from 'prop-types';
import '../../../scss/elements/BtnScroll.scss';

const BtnScroll = ({
  btnUp, btnDown, scrollUp, scrollDown 
}) => {
  return (
    <>
      {btnUp && (
        <button className="btn-up" type="button" onClick={scrollUp}>
          <i className="fa fa-chevron-circle-up" aria-hidden="true" />
        </button>
      )}
      {btnDown && (
        <button className="btn-down" type="button" onClick={scrollDown}>
          <i className="fa fa-chevron-circle-down" aria-hidden="true" />
        </button>
      )}
    </>
  );
};

BtnScroll.propTypes = {
  scrollUp: func,
  scrollDown: func,
  btnUp: bool,
  btnDown: bool
};

BtnScroll.defaultProps = {
  scrollUp: undefined,
  scrollDown: undefined,
  btnUp: false,
  btnDown: false
};

export default BtnScroll;

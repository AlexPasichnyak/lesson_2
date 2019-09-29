import React from 'react';
import { string, node } from 'prop-types';

const Wrapper = (props) => {
  const { children, title } = props;
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
      <hr />
    </>
  );
};

Wrapper.propTypes = {
  title: string.isRequired,
  children: node.isRequired
};

export default Wrapper;

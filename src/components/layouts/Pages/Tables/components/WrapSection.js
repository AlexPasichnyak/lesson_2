import React from 'react';
import { node } from 'prop-types';

const WrapSection = (props) => {
  const { children } = props;
  return <section className="b-b pt-4 pb-4">{children}</section>;
};

WrapSection.propTypes = {
  children: node.isRequired
};

export default WrapSection;

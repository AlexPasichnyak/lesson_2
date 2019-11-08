import React, { useContext } from 'react';
import { node } from 'prop-types';
import { ThemeContext } from '../../../../context/ThemeContext';

const WrapSection = (props) => {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`b-b pt-4 pb-4 ${theme}`}>
      {children}
    </section>
  );
};

WrapSection.propTypes = {
  children: node.isRequired
};

export default WrapSection;

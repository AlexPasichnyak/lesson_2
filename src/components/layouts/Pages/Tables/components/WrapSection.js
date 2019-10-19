import React from 'react';
import { node } from 'prop-types';
import { ThemeContext } from '../../../../context/ThemeContext';

const WrapSection = (props) => {
  const { children } = props;
  
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <section className={`b-b pt-4 pb-4 ${theme}`}>
          {children}
        </section>
      )}
    </ThemeContext.Consumer>
  );
};

WrapSection.propTypes = {
  children: node.isRequired
};

export default WrapSection;

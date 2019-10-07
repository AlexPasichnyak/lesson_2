import React from 'react';
import { element } from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PageView = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

PageView.propTypes = {
  children: element.isRequired
};

export default PageView;

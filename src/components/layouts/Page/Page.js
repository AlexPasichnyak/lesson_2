import React from 'react';
import { element } from 'prop-types';
import PageView from './PageView';

const Page = (props) => {
  const { children } = props;
  return <PageView>{children}</PageView>;
};
Page.propTypes = {
  children: element.isRequired
};
export default Page;

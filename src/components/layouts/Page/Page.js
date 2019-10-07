import React, { Component } from 'react';
import { element } from 'prop-types';
import PageView from './PageView';

class Page extends Component {
  render() {
    const { children } = this.props;
    return <PageView>{children}</PageView>;
  }
}
Page.propTypes = {
  children: element.isRequired
};
export default Page;

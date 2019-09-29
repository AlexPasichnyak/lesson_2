import React, { Component } from 'react';
import Home from '../Home/Home';
import ContentView from './ContentView';

class Content extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <Home />
        <ContentView />
      </>
    );
  }
}

export default Content;

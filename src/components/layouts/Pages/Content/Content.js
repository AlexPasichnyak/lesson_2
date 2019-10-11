import React, { Component } from 'react';
import Home from '../Home/Home';
import ContentView from './ContentView';
import FilteredList from './components/Frameworks';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      frameworks: [
        { name: 'Bootstrap', company: 'Twitter', typeFw: 'css' },
        { name: 'React', company: 'Facebook', typeFw: 'js' },
        { name: 'Angular', company: 'Google', typeFw: 'js' },
        { name: 'Twitter Flight', company: 'Twitter', typeFw: 'css' },
        { name: 'Foundation', company: 'ZURB', typeFw: 'css' },
        { name: 'GraphQL', company: 'Facebook', typeFw: 'js' },
        { name: 'Vue', company: 'Evan You', typeFw: 'js' }
      ]
    };
  }

  render() {
    const { frameworks } = this.state;
    return (
      <>
        <Home />
        <ContentView />
        <FilteredList arrLists={frameworks} typeFramework="js" />
      </>
    );
  }
}

export default Content;

import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Page from './components/layouts/Page/Page';
import Home from './components/layouts/Pages/Home/Home';
import Content from './components/layouts/Pages/Content/Content';
import Tables from './components/layouts/Pages/Tables/Tables';
import { ThemeContext, themes } from './components/context/ThemeContext';
import './scss/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();

    this.state = {
      theme: themes.light
    };
  }

  togglerTheme = () => {
    let { theme } = this.state;
    theme = theme === themes.light ? themes.dark : themes.light;
    this.setState({
      theme
    });
  };

  render() {
    const { theme } = this.state;
    return (
      <Router history={this.history}>
        <ThemeContext.Provider value={{
          theme, togglerTheme: this.togglerTheme
        }}
        >
          <Page>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/content" component={Content} />
              <Route path="/tables" exact strict component={Tables} />
            </Switch>
          </Page>
        </ThemeContext.Provider>
      </Router>
    );
  }
}

export default App;

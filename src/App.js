import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import POTD from './POTD';
import MarsRover from './MarsRover';
import Footer from './Footer';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={POTD} />
            <Route exact path="/curiosity-photos" component={MarsRover} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
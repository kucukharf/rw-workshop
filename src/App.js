import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import Error from './Error';

class App extends Component {
  render() {
    return (
   <div className="App">
      <Router>
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/works" exact component={Works} />
        <Route path="/contact" exact component={Contact} />
        <Route component={Error} />
      </Switch>
      <Footer/>
    </div>
  </Router>
    </div>
    );
  }
}

export default App;

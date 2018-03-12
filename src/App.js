import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Works from './Works';
import Contacts from './Contacts';
import WillMatch from './WillMatch';
import WillNotMatch from './WillNotMatch';
import './App.css';

class App extends Component {
  render() {
    return (
	    <Router>
		    <div>
		      <Header />
		      <Switch>
		      	<Route path="/" exact component={Home} />
		        <Route path="/home" exact component={Home} />
		        <Route path="/about" exact component={About} />
		        <Route path="/works" exact component={Works} />
		        <Route path="/contact" exact component={Contacts} />
		        <Redirect from="/old-match" to="/will-match" />
		        <Route path="/will-match" component={WillMatch} />
		        <Route component={WillNotMatch} />
		      </Switch>
		      <Footer />
				</div>
  		</Router>
    );
  }
}

export default App;

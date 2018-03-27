import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Works from './Works';
import Details from './Details';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/works" component={Works} />
                <Route exact path="/work/:id" component={Details} />
                <Route exact path="/contact" component={Contact} />
                <Route component={Home} />
              </Switch>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

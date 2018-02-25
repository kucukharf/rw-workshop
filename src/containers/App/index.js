import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Work from "../Work";
import Contact from "../Contact";
import Details from "../Details";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class App extends Component {
  componentDidMount() {
    console.log("About Rendered");
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/work/:work" component={Details} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

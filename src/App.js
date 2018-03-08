import React, { Component } from 'react';
import logo from './logo.svg';
import Collapse from './Collapse';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Home">
        <header>
          <nav>
            <section className="container">
              <aside className="link-border">
                <a className="active">
                  hello world
                </a>
              </aside>
              <aside className="link-border">
                <a href="/home"> home </a>
                <a href="/about"> about </a>
                <a href="/works"> works </a>
                <a href="/contact"> contact</a>
              </aside>
            </section>
          </nav>
        </header>
        
        <main>
          <div className="fadeInUp">
            <header className="container header fadeInUp">
              <h1> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h1>
              <h2> ellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</h2>
              <a href="#" className="btn dark"> Get in touch </a> 
            </header>
          </div>
        </main>
        <footer>
        <section className="container">
         <aside className="link-border">
                <a className="active">
                  twitter
                </a>
                <a className="active">
                  facebook
                </a>
            </aside>
          </section>
        </footer>
      </div>
    );
  }
}

export default App;

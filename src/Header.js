import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
          <nav>
            <section className="container">
              <aside className="link-border">
                <a className="active">
                  hello world
                </a>
              </aside>
              <aside className="link-border">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/works">works</Link>
                <Link to="/contact">contact</Link>
              </aside>
            </section>
          </nav>
      </header>
    );
  }
}

export default Header;

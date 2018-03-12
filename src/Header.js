import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends Component {
  render() {
    return (
        <header>
          <nav>
            <section className="container">
              <aside className="link-border">
                <NavLink activeClassName="active" to="/home">
                  hello world
                </NavLink>
              </aside>
              <aside className="link-border">
                <NavLink to="/home" activeClassName="active"> home </NavLink>
                <NavLink to="/about" activeClassName="active"> about </NavLink>
                <NavLink to="/works" activeClassName="active"> works </NavLink>
                <NavLink to="/contact" activeClassName="active"> contact</NavLink>
              </aside>
            </section>
          </nav>
        </header>
    );
  }
}

export default withRouter(Header);

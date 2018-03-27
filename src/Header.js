import React, { Component } from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header>
          <nav>
            <section className="container">
              <aside className="link-border">
                <NavLink to="/home" activeClassName="active">burak arslan</NavLink>
              </aside>
              <aside className="link-border">
                <NavLink to="/home" activeClassName="active">home</NavLink>
                <NavLink to="/about" activeClassName="active">about</NavLink>
                <NavLink to="/works" activeClassName="active">works</NavLink>
                <NavLink to="/contact" activeClassName="active">contact</NavLink>
              </aside>
            </section>
          </nav>
        </header>
      </div>
    );
  }
}

export default withRouter(Header);



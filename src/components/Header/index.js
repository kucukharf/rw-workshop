import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router';


class Header extends Component {
  render() {
    return (
      <nav>
        <section className="container">
          <aside className="link-border">
          <Link to="/" className={this.props.location.pathname === "/" ? "active" : null} > burak arslan </Link>
          </aside>
          <aside className="link-border">
            <NavLink to="/works" activeClassName="active"> works </NavLink>
            <NavLink to="/about" activeClassName="active"> about </NavLink>
            <NavLink to="/contact" activeClassName="active"> contact </NavLink>
          </aside>
        </section>
    </nav>
    );
  }
}


export default withRouter(Header)

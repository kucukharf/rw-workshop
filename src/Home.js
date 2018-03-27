import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <main>
          <div className="fadeInUp">
            <header className="container header fadeInUp">
              <h1> home </h1>
            </header>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Home);



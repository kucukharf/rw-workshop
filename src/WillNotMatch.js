import React, { Component } from 'react';

class WillNotMatch extends Component {
  render() {
    return (
      <main>
          <div className="fadeInUp">
            <header className="container header fadeInUp">
              <h1>404 Not Found </h1>
              <h2>the page that you are looking for is moved or removed. 
              	If you believe there is an issue with that page, please contact with administrator.</h2>
              <a href="#" className="btn dark"> Get in touch </a> 
            </header>
          </div>
        </main>
    );
  }
}

export default WillNotMatch;

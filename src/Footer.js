import React, { Component } from 'react';
class Footer extends Component {
  render() {
    return (
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
    );
  }
}

export default Footer;

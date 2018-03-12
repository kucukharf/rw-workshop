import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends Component {
  render() {
    return (
        <main>
          <div className="container fadeInUp" style={{textAlign:"center"}}>
             <h1 style={{maxWidth:"100%", fontSize:'3rem', width:"100%", margin:"50px auto"}}> Sorry, we couldnt found the page</h1>
             <Link to="/home" className="btn dark" style={{margin:"40px auto", display:'inline-block'}}> Go to Home </Link> 
          </div>
        </main>
    );
  }
}

export default Error;

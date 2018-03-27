import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
      isValid : false
    }
  }
  componentWillMount(){
    let availableDetailRoutes = ['abc', '123', 'test', 'felan', 'filan'];
    let isValid = availableDetailRoutes.includes(this.props.match.params.id);
    this.setState({isValid : isValid})
  }
  render() {
    if (!this.state.isValid) {
      return(<Redirect to={{
        pathname: '/not-found',
        state: { from: this.props.location }
      }}/>)
    }
    return (
      <div className="Details">
        <main>
          <div className="fadeInUp">
            <header className="container header fadeInUp">
              <h1>works | {this.props.match.params.id}</h1>
            </header>
          </div>
        </main>
      </div>
    );
  }
}

export default Details;



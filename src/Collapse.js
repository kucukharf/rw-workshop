import React, { Component } from 'react';

class Collapse extends Component {
  constructor(props){
    super(props);
    this.state = {
      opened: false
    }
  }

  handleClick(){
    this.setState({
      opened: !this.state.opened
    })
  }

  render() {
    var collapseClass = "collapse-content"; 
      
      if(this.state.opened) {
        collapseClass = "collapse-content collapse-content--opened";
      } else {
        collapseClass = "collapse-content"; 
      }

    return (
      <div className="collapse">
       <a onClick={() => { this.handleClick() } } className="collapse-title"> 
       {this.props.title} 
       </a>
         <div className={collapseClass}>
           <div className="collapse-content-inner">
            {this.props.content} 
           </div>
         </div>
      </div>
    );
  }
}

export default Collapse;

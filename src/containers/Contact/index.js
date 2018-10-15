import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

class Contact extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	name:'',
	    	email:'',
	    	message:'',
	    	to:'burakarslan17@gmail.com',
	    	rules:[false, false, false],
	    	isFormValid:false,
	    	isEmailValid:null,
	    	isNameValid:null,
	    	isMessageValid:null
	    };

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleSubmit(event){

  		event.preventDefault();
  		this.state.isFormValid && this.sendForm();
  	}


  	isFormValid() {
  		let isFormValid = false;
  		let isEmailValid = this.validateEmail(this.state.email)
  		let isNameValid = (this.state.name.length > 1 ? true : false)
  		let isMessageValid = (this.state.message.length > 1 ? true : false)

  		this.setState({
  			rules:[
  			isEmailValid,
  			isNameValid,
  			isMessageValid
  			], isEmailValid:isEmailValid, isNameValid:isNameValid, isMessageValid:isMessageValid }, function(){
  				isFormValid = !this.state.rules.includes(false)
  				isFormValid && this.setState({isFormValid:true})
  				!isFormValid && this.showMessage();
  			})
  	}

  	sendForm(){
  		let mail = `mailto:${this.state.to}?subject=${encodeURIComponent(this.state.name)}&body=${encodeURIComponent(this.state.message)}&cc=${encodeURIComponent(this.state.email)}`;

  		let a = document.createElement('a');
  		a.href = mail;
  		a.click();
  	}

  	showMessage(){
  		this.setState({isFormValid:false})
  	}

  	handleChange(event) {
  		this.setState({ [event.target.id]: event.target.value });
  		this.isFormValid();
  	}

  	validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
	}

	render() {
		return (
			<section className="contact container fadeInUp small">
				<Helmet>
	                <meta charSet="utf-8" />
	                <title>ba | contact</title>
	            </Helmet>
				<div className="col-1-of-1 link-border">
					<h1>Let's Talk</h1>
					<h2>
						Reach out for a project or just to say hello! My personal email is{' '}
						<a href="mailto:burakarslan17@gmail.com">hi@burakarslan.com.tr</a>
					</h2>
				</div>
				<form className="contact-form grid-row">
					<fieldset className="col-1-of-2">
						<label>
							Full Name
							<span />
						</label>
						<input id="name" value={this.state.name} onChange={this.handleChange}  placeholder="John Doe" />
						<span className={this.state.isNameValid ? "message hide" : "message show"}> Upps! is your name correct? </span>
					</fieldset>
					<fieldset className="col-1-of-2">
						<label>
							Email
							<span />
						</label>
						<input type="email" id="email" value={this.state.email} onChange={this.handleChange} placeholder="john.doe@gmail.com" />
						<span className={this.state.isEmailValid ? "message hide" : "message show"}> Upps! is your mail correct?  </span>
					</fieldset>
					<fieldset className="col-1-of-1">
						<label>
							Message
							<span />
						</label>
						<textarea id="message" value={this.state.message} onChange={this.handleChange} placeholder="Hello..." />
						<span className={this.state.isMessageValid ? "message hide" : "message show"}> Upps! your message seems to strange. </span>
					</fieldset>
					<fieldset className="col-1-of-1">
						<div className="grid-row">

							<button type="button" onClick={this.handleSubmit} className={this.state.isFormValid ? "button" : "button disabled"}>Send Message</button>
						</div>
					</fieldset>
				</form>
			</section>
		);
	}
}

export default Contact;

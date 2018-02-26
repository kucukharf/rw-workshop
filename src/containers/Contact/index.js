import React, { Component } from 'react';

class Contact extends Component {
	componentDidMount() {
		console.log('About Rendered');
	}

	render() {
		return (
			<section className="contact container fadeInUp small">
				<div className="col-1-of-1 link-border">
					<h1>Let's Talk</h1>
					<h2>
						Reach out for a project or just to say hello! My personal email is{' '}
						<a href="mailto:hi@burakarslan.com">hi@burakarslan.com</a>
					</h2>
				</div>
				<form className="contact-form grid-row">
					<fieldset className="col-1-of-2">
						<label>
							Full Name
							<span />
						</label>
						<input id="name" placeholder="John Doe" />
					</fieldset>
					<fieldset className="col-1-of-2">
						<label>
							Email
							<span />
						</label>
						<input type="email" id="email" placeholder="john.doe@gmail.com" />
					</fieldset>
					<fieldset className="col-1-of-1">
						<label>
							Message
							<span />
						</label>
						<textarea id="message" placeholder="Hello..." />
					</fieldset>
					<fieldset className="col-1-of-1">
						<div className="grid-row">
							<button className="false">Send Message</button>
						</div>
					</fieldset>
				</form>
			</section>
		);
	}
}

export default Contact;

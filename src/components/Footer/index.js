import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';


class Header extends Component {
	componentDidMount() {
		console.log('footer rendered');
	}
	render() {
		return (
			<footer>
				<section className="container">
					<aside>
						<Link to="/"> © 2018 burak arslan, Inc. </Link>
					</aside>
					<aside className="link-border">
						<Link target="_blank" to="https://dribbble.com/arslanburak">
							Dribbble
						</Link>
						<Link target="_blank" to="https://www.behance.net/burakarsla5745">
							Behance
						</Link>
						<Link target="_blank" to="https://github.com/kucukharf">
							GitHub
						</Link>
						<Link target="_blank" to="https://linkedin.com/in/buarslan">
							LinkedIn
						</Link>
						<Link target="_blank" to="https://twitter.com/kucukharf">
							Twitter
						</Link>
						<Link target="_blank" to="https://plus.google.com/+burakarslan">
							Google
						</Link>
					</aside>
				</section>
			</footer>
		);
	}
}


export default withRouter(Header)

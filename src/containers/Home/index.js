import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
	componentDidMount() {
		console.log('About Rendered');
	}

	render() {
		return (
			<div className="fadeInUp">
				<header className="container header fadeInUp">
					<h1>UI/UX developer &amp; designer from Istanbul, Turkey.</h1>
					<h2>
						I work with startups and businesses to create great experiences on web &amp;
						mobile applications.
					</h2>
					<Link to="/contact" className="btn dark">
						{' '}
						Get in touch
					</Link>
				</header>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	works: state.works,
});

export default connect(mapStateToProps)(Home);

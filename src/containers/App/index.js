
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Work from '../Work';
import Contact from '../Contact';
import Details from '../Details';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Helmet} from 'react-helmet';

class App extends Component {
	render() {
		return (
			<div>
				<Helmet>
	                <meta charSet="utf-8" />
	                <title>ba</title>
	                <link rel="canonical" href="http://mysite.com/example" />
	            </Helmet>
				<Header />
				<main>
					<Route exact path="/" component={Home} />
					<Route exact path="/works" component={Work} />
					<Route exact path="/works/:work" component={Details} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import scrollToY from '../../utils/scrollTo';
import { getWorkDetails } from '../../reducers/works';

class Details extends Component {
	componentWillMount() {
		let detail = this.props.location.pathname.split('/').slice(-1)[0];
		this.props.getWorkDetails(detail);
	}
	componentWillReceiveProps() {
		setTimeout(scrollToY(0, 1500, 'easeInOutQuint'), 500);
	}

	render() {
		if (this.props.works.current) {
			return (
				<div className="fadeInUp">
					<section className="client-cover container">
						<span className="SVGInline">
							<img
								src={this.props.works.current.logo}
								alt="http://sony.com"
								style={{ width: '320px', maxWidth: '100%', margin: '0 auto' }}
							/>
						</span>
					</section>
					<div
						className={
							this.props.works.current.theme
								? 'client-overview client-overview--dark'
								: 'client-overview'
						}
						style={{ background: this.props.works.current.brandColor }}
					>
						<section className="container">
							<div className="col-7-of-12 overview">
								<h3>Overview</h3>
								<p>{this.props.works.current.overview}</p>
							</div>
							<div className="col-1-of-12" />
							<div className="col-4-of-12 details">
								<h3>Details</h3>
								<ul>
									<li>
										<span>Duration</span>
										<span>{this.props.works.current.duration}</span>
									</li>
									<li>
										<span>Scope</span>
										<span>{this.props.works.current.scope}</span>
									</li>
									<li>
										<span>Stack</span>
										<span>{this.props.works.current.stack}</span>
									</li>
									<li>
										<span>Website</span>
										<a href={this.props.works.current.website} target="_blank">
											{this.props.works.current.website}
										</a>
									</li>
									<li>
										<span>App Store</span>
										{this.props.works.current.appstore ? (
											<a
												href={this.props.works.current.appstore}
												target="_blank"
												className="btn"
											>
												Download
											</a>
										) : (
											'not available'
										)}
									</li>
									<li>
										<span>Play Store</span>
										{this.props.works.current.playstore ? (
											<a
												href={this.props.works.current.playstore}
												target="_blank"
												className="btn"
											>
												Download
											</a>
										) : (
											'not available'
										)}
									</li>
								</ul>
							</div>
						</section>
					</div>
					<div>
						<div>
							<section className="container full">
								<div className="col-12-of-12">
									<img
										src="/src/img/recipelist/macbook.dff29.jpg"
										alt="Recipelist For Web"
									/>
								</div>
							</section>
							<section className="container">
								<div className="client-quote">
									<blockquote>{this.props.works.current.spotTitle} </blockquote>
								</div>
							</section>

							<section className="container full">
								<div className="col-12-of-12">
									<span className="SVGInline">
										<img
											src={this.props.works.current.logo}
											alt="http://sony.com"
											style={{
												maxWidth: '320px',
												margin: '0 auto',
											}}
										/>
									</span>
								</div>
							</section>
							<section className="container">
								<div className="client-quote">
									<blockquote>{this.props.works.current.spotDesc}</blockquote>
								</div>
							</section>
						</div>
					</div>
					<div>
						<section className="container prevnext">
							{this.props.works.current.related &&
								this.props.works.current.related.map((item, number) => {
									return (
										<Card
											key={number}
											extraClass="half-size"
											image={item.image}
											title={item.title}
											brandColor={item.brandColor}
											description={item.description}
											slug={item.slug}
										/>
									);
								})}
						</section>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

const mapStateToProps = state => ({
	works: state.works,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{ getWorkDetails, changePage: location => push(location) },
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Details);

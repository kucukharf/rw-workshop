import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getWorkDetails } from '../../reducers/works';
import './card.css';

class Card extends Component {
	render() {
		let clazz = this.props.extraClass ? [this.props.extraClass, 'card'] : ['card'];
		return (
			<div className={clazz.join(' ')} style={{ height: 416 }}>
				<Link
					onClick={() => this.props.getWorkDetails(this.props.slug)}
					to={'/work/' + this.props.slug}
					style={{
						backgroundImage: `url(${this.props.image})`,
						backgroundColor: this.props.brandColor,
						backgroundPosition: 'center center',
						backgroundSize: 'cover',
					}}
				>
					<div>
						<h3>{this.props.title}</h3>
						<hr />
						<h4>{this.props.description}</h4>
					</div>
				</Link>
			</div>
		);
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);

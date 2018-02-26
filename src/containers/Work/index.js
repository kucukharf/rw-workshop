import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllWorks } from '../../reducers/works';
import Card from '../../components/Card';

class Work extends Component {
	componentDidMount() {
		this.props.getAllWorks();
	}
	render() {
		return (
			<div className="fadeInUp">
				<section className="container">
					<h3 className="col-1-of-1 headline">Featured Work</h3>
				</section>
				<section className="container clients">
					{this.props.works.items &&
						this.props.works.items.map((item, number) => {
							return (
								<Card
									key={number}
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
		);
	}
}

const mapStateToProps = state => ({
	works: state.works,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getAllWorks }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Work);

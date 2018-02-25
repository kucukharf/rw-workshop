import React, { Component } from "react";
import { withRouter } from "react-router";

class About extends Component {
	render() {
		return (
			<div>
				<section className="container fadeInUp photo">
					<div className="col-6-of-12">
						<img
							alt="asdasd"
							src="https://aboutme.imgix.net/background/users/k/u/c/kucukharf_1377204315_31.jpg?q=40&dpr=2&auto=format&fit=max&w=1200&h=1621.6216216216217"
						/>
					</div>
					<div className="col-4-of-12 pull-2">
						<h1>About Me</h1>
						<h2> UI/UX Developer, Designer </h2>
					</div>
				</section>
				<section className="container fadeInUp profile">
					<div className="col-5-of-12">
						<h4>Profile</h4>
					</div>
					<div className="col-7-of-12 link-border">
						<p>
							I am a developer and designer of web and mobile products.
							Currently based in the great city of istanbul,
							Turkey.
						</p>
						<p>
							My skills include mobile interface design,
							prototyping, wireframing, branding, front-end
							development, and back-end development. I love
							building digital products and creating enjoyable
							user experiences.
						</p>
						<p>
							I have a passion for minimalism in design and
							believe great design should be invisible. Over the
							last 8 years, I've worked on a range of web and
							mobile products.
						</p>
						<p>
							I'm always looking to work on fun projects. Feel
							free to <a href="/contact">reach out</a> with work
							inquiries, side projects, or just to say hello!{" "}
						</p>
					</div>
				</section>
				<section className="container fadeInUp profile">
					<div className="col-5-of-12">
						<h4>Experience</h4>
					</div>
					<div className="col-7-of-12 link-border">
						<ul className="experience">
							<li>
								<h4>
									<span>Sony Corp.</span>
									<span>2016–Present</span>
								</h4>
								<span>UI Developer</span>
							</li>
							<li>
								<h4>
									<span>Gri Creative</span>
									<span>2014–2016</span>
								</h4>
								<span> UI Developer</span>
							</li>
							<li>
								<h4>
									<span>Casaba Creative</span>
									<span>2014–2015</span>
								</h4>
								<span>UI Developer</span>
							</li>
							<li>
								<h4>
									<span>Personal</span>
									<span>2005–2018</span>
								</h4>
								<span>UX & UI Developer</span>
							</li>
						</ul>
					</div>
				</section>
			</div>
		);
	}
}
export default withRouter(About);

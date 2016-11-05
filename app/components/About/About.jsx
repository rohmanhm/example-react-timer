import React from 'react';

export default React.createClass({
	render() {
		return (
			<div className="page about">
				<div className="wrapper">
					<div className="title">
						<h1>About page</h1>
					</div>
					<div className="content">
						This is simple react timer application, built with React, React-Router, Sass, etc (See dependencies in package.json for more information). <br/>
						Thanks for freesound.org for the awesome alarm sounds. Haha. Check this link if you like the sounds <a href="https://www.freesound.org/people/Vendarro/sounds/345813/">https://www.freesound.org/people/Vendarro/sounds/345813/</a><br/>
						Follow me in GitHub or Social Media.
						<ul className="list-social-media">
							<li><a href="https://www.facebook.com/rohmanhm">Facebook</a></li>
							<li><a href="https://www.github.com/rohmanhm">GitHub</a></li>
							<li><a href="https://www.twitter.com/rohmanhm">Twitter</a></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
});

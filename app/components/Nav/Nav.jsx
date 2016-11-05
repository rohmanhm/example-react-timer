import React from 'react';
import NavMenuListElement from './navMenuListElement';

export default React.createClass({
	render() {
		return (
			<nav>
				<div className="container">
					<NavMenuListElement/>
				</div>
			</nav>
		)
	}
});

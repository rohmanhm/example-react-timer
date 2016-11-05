import React from 'react';

export default React.createClass({
	render() {
		let children = this.props.children;
		return (
			<main>
				<div className="container">
					{ children }
				</div>
			</main>
		)
	}
});

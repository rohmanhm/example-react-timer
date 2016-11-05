import React from 'react';
import ReactDOM from 'react-dom';

import { Nav } from '../Nav';
import Main from './Main';

const _Main = React.createClass({
	render() {
		return (
			<div className="timer-app">
				<header>
					<div id="navigation">
						<Nav/>
					</div>
				</header>
				<Main children={ this.props.children }/>
			</div>
		)
	}
});

module.exports = {
	Main: _Main,
	_Main: Main
}
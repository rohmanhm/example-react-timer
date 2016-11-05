import React from 'react';

// Data All of list Nav menu list
import list from './navMenuListData';

export default React.createClass({
	getInitialState() {
		return {
			history: '#',
			list: list
		}	
	},
	makeList() {
		let dataList = this.state.list;
		let list = dataList.map( (obj, index) => 
			<li key={ index }>
				<a className="fl" href={ this.state.history + obj.link }>{ obj.label }</a>
			</li>
		);
		return list;
	},
	render() {
		return (
			<ul className="navmenu">
				{ this.makeList() }
			</ul>
		)
	}
});
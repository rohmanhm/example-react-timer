import React from 'react';

export default React.createClass({
	componentWillReceiveProps(nextProps) {
		let { Time } = nextProps;
		this.setState({
			Time: Time
		});
	},
	getInitialState() {
		return {
			Time: 0
		}
	},
	convertToClock(time) {
		let minutes = Math.floor(time/60),
			seconds = time % 60;

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		let resultText = minutes + ':' + seconds;
		return resultText;
	},
	render() {
		let { Time } = this.state;
		let showClock = (time = Time) => {
			let clockTime = this.convertToClock(time);
			return <span>{ clockTime }</span>
		}
		return (
			<div className="clock-el">
				{ showClock() }
			</div>
		)
	}
});

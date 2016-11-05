import React from 'react';

import { Clock } from '../Clock';

export default React.createClass({
	componentDidUpdate(prevProps, prevState) {
		let { Status } = this.state;
		if (Status != prevState.Status) {
			switch (Status) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({ Time: 0 });
				case 'paused':
					clearInterval(this.timerInterval);
					this.timerInterval = undefined;
					break;
			}
		}
	},
	getInitialState() {
		return {
			Time: 0,
			Status: 'stopped'
		}
	},
	handleStart() {
		this.setState( { Status: 'started' } )
	},
	handlePause() {
		this.setState( { Status: 'paused' } )
	},
	handleStop() {
		this.setState( { Status: 'stopped' } )
	},
	startTimer() {
		this.timerInterval = setInterval(() => {
			var newTime = ++this.state.Time;
			this.setState({
				Time: newTime
			});
		}, 1000);
	},
	formOnSubmit(e) {
		e.preventDefault();
	},
	render() {
		let { Time, Status } = this.state;
		/* Start render button (stop|pause) */
		let buttonRender = () => {
			if (Status == 'stopped' || Status == 'paused') {
				return <button onClick={ this.handleStart } className="bt-default bt-start">Start</button>;
			} else if (Status != 'paused') {
				return <button onClick={ this.handlePause } className="bt-default bt-pause">Pause</button>;
			}
		}

		return (
			<div className="page timer">
				<h2>I'm the Timer</h2>
				<Clock Time={ Time }/>
				<form onSubmit={ this.formOnSubmit } style={ { width: '400px', margin: '30px auto' } }>
					{ buttonRender() }
					<button onClick={ this.handleStop } className="bt-default bt-stop">Stop</button>
					<div className="clear"></div>
				</form>
			</div>
		)
	}
});
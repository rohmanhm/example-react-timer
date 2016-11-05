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
					let audio = new Audio();
					audio.src = '/assets/sounds/345813__vendarro__alarm-no.mp3';
					audio.play();
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
		let time = this.refs.time.value;
		if (time == undefined || time <= 0 || time == '' || time.length < 1) {
			alert('Please insert correct time');
			return false;
		}

		time = parseInt(time, 10);
		this.setState({ 
			Status: 'started',
			Time: time
		})
	},
	handlePause() {
		this.refs.time.value = this.state.Time;
		this.setState( { Status: 'paused' } )
	},
	handleStop() {
		this.setState( { Status: 'stopped' } )
	},
	startTimer() {
		this.timerInterval = setInterval(() => {
			if (this.state.Time <= 0) {
				this.setState({Status: 'stopped'});
				return false;
			} else {
				let newTime = this.state.Time - 1;
				this.setState({
					Time: newTime
				});
			}
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

		let disabledInput = () => {
			if (Status == 'started') {
				return <input type="number" disabled className="in-default" ref="time" placeholder="Example: 120"/>;
			} else {
				return <input type="number" className="in-default" ref="time" placeholder="Example: 120"/>
			}
		}

		return (
			<div className="page countdown">
				<h2>Set your countdown</h2>
				<Clock Time={ Time }/>
				<form onSubmit={ this.formOnSubmit } style={ { width: '400px', margin: '30px auto' } }>
					{ disabledInput() }
					<div className="clear"></div>
					{ buttonRender() }
					<button onClick={ this.handleStop } className="bt-default bt-stop">Stop</button>
					<div className="clear"></div>
				</form>
			</div>
		)
	}
});


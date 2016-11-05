import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import { About } from './components/About';
import { CountDown } from './components/Countdown';
import { Main } from './components/Main';
import { Timer } from './components/Timer';

require('style!css!sass!AppStyles');

ReactDOM.render(
	<Router history={ hashHistory }>
		<Route path="/" component={ Main }>
			<Route path="about-us" component={ About }/>
			<Route path="countdown" component={ CountDown }/>
			<Route path="timer" component={ Timer }/>
			<IndexRoute component={ Timer }/>
		</Route>
	</Router>,
	document.querySelector('root')
);
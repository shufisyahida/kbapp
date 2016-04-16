import './assets/css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';

import Home from './views/home/home.jsx';
import Profile from './views/profile/profile.jsx';

persist(alt, storage, 'app');

const appRouter = (
	<Router history={browserHistory}>
		<Router path="/" component={Home}/>
		<Router path="/profile" component={Profile}/>
	</Router>
);

ReactDOM.render(appRouter, document.getElementById('app'));
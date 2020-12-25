import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import ReduxAsyncQueue from 'redux-async-queue'
import reducer from './redux/reducer'
import initialState from './redux/initialState'
// import { Router } from 'react-router'
import { createBrowserHistory } from "history";
import { Router, Link, Switch } from 'react-router-dom'

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(
		applyMiddleware(
			ReduxAsyncQueue,
			thunkMiddleware
		)
	)
)

const history = createBrowserHistory();

ReactDOM.render(
	<Router history = {history}>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
  	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

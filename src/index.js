import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './components/Root';
import configureStore from './store/configureStore';
import './styles/styles.scss';

const store = configureStore();

render(
	<Provider store={store}><Root /></Provider>,
	document.getElementById('app')
);

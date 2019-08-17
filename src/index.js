import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

import Main from './containers/Main/Main';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const App = (
	<Provider store={store}>
		<Main />
	</Provider>
);
ReactDOM.render(
	<Main />, 
	document.getElementById('app')
);

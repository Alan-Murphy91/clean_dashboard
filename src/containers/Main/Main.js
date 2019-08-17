import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import AppRouter from '../../routers/AppRouter';
import Footer from '../../components/Footer/Footer';

export default class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<AppRouter />
				<Footer />
			</React.Fragment>
		);
	}
}

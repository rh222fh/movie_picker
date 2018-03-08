import React, { Component } from 'react';
import Movies from './Movies';
import './Main.css';

class Main extends Component {
	render() {
		return (
			<section className='main'>
				<Movies />
			</section>
		);
	}
}

export default Main;

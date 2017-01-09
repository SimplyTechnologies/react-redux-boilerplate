import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';


export class WelcomeContainer extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div className={styles.container}>
				<img src="http://www.simplytechnologies.net/img/logo.png" />
				<h1>Welcome</h1>
				<div>
		      <Link to="/posts">Posts</Link>
				</div>
			</div>
		);
	}
}

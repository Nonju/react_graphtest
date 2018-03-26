
import React, { Component } from 'react';

export default class Bargraph extends Component {
	constructor(props) {
		super(props);

		this.data = null;
	}

	componentWillMount() {
		this.data = this.props.data;
	}

	componentWillReceiveProps(newProps) {
		this.data = newProps;
	}

	render() {
		if (!this.data) return <div />;
		
		return (
			<h1>Not yet implemented</h1>
		);
	}
}

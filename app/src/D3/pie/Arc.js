
import React, { Component } from 'react';
import d3 from 'd3';

export default class Arc extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.updateD3(this.props);
	}

	componentWillReceiveProps(newProps) {
		this.updateD3(newProps);
	}

	updateD3(newProps) {

	}

	render() {
		return (<div />);
	}
}


import React, { Component } from 'react';
import { RadialChart } from 'react-vis';

import colors from './colors';

export default class Piechart extends Component {

	constructor(props) {
		super(props);

		this.data = null;
	}

	transformData(newData) {
		if (!newData) {
			this.data = null;
			return;
		}

		this.data = newData.map((d, i) => ({
			...d,
			angle: d.value,
			color: colors[i],
			label: d.title
		}));
	}

	componentWillMount() {
		this.transformData(this.props.data);
	}

	componentWillReceiveProps(newProps) {
		this.transformData(newProps && newProps.data);
	}

	render() {
		if (!this.data) return <div />;

		return (
			<RadialChart
				data={this.data}
				width={300}
				height={300}
				colorType='literal' />
		);
	}
}
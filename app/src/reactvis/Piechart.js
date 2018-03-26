
import React, { Component } from 'react';

import { RadialChart } from 'react-vis';

export default class Piechart extends Component {

	constructor(props) {
		super(props);

		this.data = null;
		this.colors = ['d00', '0d0', '00d', 'd0d', 'dd0'];
	}

	updateData(newData) {
		if (!newData) {
			this.data = null;
			return;
		}

		this.data = newData.map((d, i) => ({
			...d,
			angle: d.value,
			color: this.colors[i],
			label: d.title
		}));
	}

	componentWillMount() {
		this.updateData(this.props.data);
	}

	componentWillReceiveProps(newProps) {
		this.updateData(newProps && newProps.data);
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
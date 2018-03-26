
import React, { Component } from 'react';
import { XYPlot, VerticalBarSeries } from 'react-vis';

import colors from './colors';


export default class Bargraph extends Component {
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
			x: i, // API allows this to be a string, code does not...
			y: d.value,
			color: colors[i]
		}));
		console.log('data afterr:', this.data);
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
			<XYPlot
				width={300}
				height={300} >
				<VerticalBarSeries
					colorType='literal'
					data={this.data} />
			</XYPlot>
		);
	}
}

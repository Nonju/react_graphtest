import React, { Component } from 'react';
import Chart from 'chart.js';

import {barData, pieData} from './ChartJsData';

class BarChart extends Component {
  constructor() {
    super();

    this.updateChart = this.updateChart.bind(this);
  }

  componentWillMount() {
    this.name = this.props.name;
    this.dest = this.props.dest;
    this.data = this.props.data;
  }

  componentDidMount() {
    this.chart = this.createChart();
  }

  updateChart() {
    this.chart.data.datasets.forEach((dataset) => {
      dataset.backgroundColor[2] = 'rgba(0,0,0, 1)';
    });

    this.chart.update();
  }

  createChart() {
    return new Chart(this.dest, this.data);
  }

  render() {
    return(
      <div className="chartJsContainer">
        <canvas id={this.dest} width="400" height="400"></canvas>
        <button onClick={this.updateChart}>Update Chart</button>
      </div>
    )
  }
};

class ChartJs extends Component {
  render() {
    const bar = {
      name: 'BarChart',
      dest: 'chartJsBar',
      data: barData
    };
    const pie = {
      name: 'PieChart',
      dest: 'chartJsPie',
      data: pieData
    };
    return (
      <div>
        <BarChart {...bar}/>
        <BarChart {...pie}/>
      </div>
    )
  }
};

export default ChartJs;
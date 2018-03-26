import React, { Component } from 'react';
import Chartist from 'chartist';


class BarChart extends Component {
  componentWillMount() {
    this.dest = this.props.dest;
    this.data = this.props.data;
  }
  componentDidMount() {
    // this.formatData();
    this.createChart();
  }

  createChart() {
    const id = '#'+this.dest;
    return new Chartist.Bar(id, this.data);
  }

  render() {
    return (
      <div id={this.dest}/>
    )
  }
}

class PieChart extends Component {
  constructor() {
    super()

    this.modChart = this.modChart.bind(this);
  }

  componentWillMount() {
    this.dest = this.props.dest;
    this.data = this.props.data;
  }

  componentDidMount() {
    this.chart = this.createChart();
  }

  createChart() {
    const id = '#'+this.dest;
    return new Chartist.Pie(id, this.data);
  }

  modChart() {
    this.chart.update({
      series: [5,35,45,3,2]
    });
  }

  render() {
    return (
      <div>
        <div id={this.dest} />
        <button onClick={this.modChart}>Mod Chart</button> 
      </div>
    )
  }
}

class ChartistTest extends Component {
  componentWillMount() {
    const barData = {
      dest: 'barChart',
      data: {
        'labels': ['Jan', 'Feb', 'Mar'],
        'series': [
          [1,2,3,4,5],
          [3,5,2,6,1],
        ]
      }
    };
    this.barData = barData;

    const pieData = {
      dest: 'pieChart',
      data: {
        // labels: ['Ananas','Anananas', 'Pineapple'],
        series: [10,5,5,6,5,3,2,6,2]
      }
    };
    this.pieData = pieData;
  }


  render() {
    return (
      <div>
        <BarChart {...this.barData} />
        <PieChart {...this.pieData} />
      </div>
    )
  }
}

export default ChartistTest;
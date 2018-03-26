import React, { Component } from 'react';
import Chartist from 'chartist';


class BarGraph extends Component {
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
    
    this.state = {
      chart: null
    };
    this.modChart = this.modChart.bind(this);
  }

  componentWillMount() {
    this.dest = this.props.dest;
    this.data = this.props.data;
  }

  createChart() {
    const id = '#'+this.dest;
    return new Chartist.Pie(id, this.data);
  }

  modChart() {
    this.state.chart.update({
      series: [5,35,45,3,2]
    });
  }

  componentDidMount() {
    this.state.chart = this.createChart();
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
      dest: 'barGraph',
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
        <BarGraph {...this.barData} />
        <PieChart {...this.pieData} />
      </div>
    )
  }
}

export default ChartistTest;
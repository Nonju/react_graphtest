import React, { Component } from 'react';
import {PieChart, ColumnChart, LineChart}from 'react-chartkick';


class ChartKick extends Component {
  render() {
    const data = [
      {name: "Apple", data: {"Tuesday": 3, "Friday": 4}, stack: "fruit"},
      {name: "Carrot", data: {"Tuesday": 5, "Friday": 2}, stack: "vegetable"},
      {name: "Pear", data: {"Tuesday": 1, "Friday": 8}, stack: "fruit"},
      {name: "Beet", data: {"Tuesday": 2, "Friday": 9}, stack: "vegetable"}
    ]
    return(
      <div className="chartJsContainer">
        <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />
        <ColumnChart data={[["Work", 32], ["Play", 1492]]} />
        <LineChart data={data} colors={[
          'rgba(0, 0, 0, 1)',
          'rgba(102, 204, 0, 1)',
          'rgba(178, 255, 102 , 1)',
          'rgba(255, 0, 0, 1)',]} label="SHARK"   /> 
      </div>
    )
  }
}

export default ChartKick;
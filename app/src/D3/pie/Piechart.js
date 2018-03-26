
// https://swizec.com/blog/how-to-make-a-piechart-using-react-and-d3/swizec/6785

import React, { Component } from 'react';
// import * as d3 from 'd3';
import data from './data';
import LabledArc from './Arc';

const d3 = require('d3');

export default class Piechart extends Component {

  constructor(props) {
    super(props);

    console.log('D3:', d3);
    this.pie = d3.layout.pie()
                .value(d => d.value);

    this.colors = d3.scale.category10();
  }

  arcGenerator(d, i) {
    return (
      <LabledArc
        key={`arc-${i}`}
        data={d}
        innerRadius={this.props.innerRadius}
        outerRadius={this.props.outerRadius}
        color={this.colors[i]}
      />
    );
  }

  render() {
    let pie = this.pie(this.props.data);
    let translate = `translate${this.props.x}, ${this.props.y}`;

    return (
      <g transform={translate}>
        {pie.map((d, i) => this.arcGenerator(d, i))}
      </g>
    );
  }

  // render() {
  //   // const margins = { top: 50, right: 20, bottom: 100, left: 60 };
  //   const svgDimensions = {
  //     width: Math.max(this.props.parentWidth, 300),
  //     height: 500
  //   };

  //   const pie = d3.pie(data)
  //     .sort(null)
  //     .value(d => d.value);
  //   console.log('PIE:', pie);

  //   return (
  //     <svg width={svgDimensions.width} height={svgDimensions.height} >
  //       <pie />
  //     </svg>
  //   );
  // }
}

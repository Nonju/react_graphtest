import React, { Component } from 'react';
import ChartistTest from './Chartist';
import D3 from './D3/';
import ChartJs from './ChartJs';

class Button extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    const {name, component} = {...this.props};
    return (
      <div>
        <button onClick={this.handleClick}>
          {name}
        </button>
        <div>
          {this.state.clicked ? component : null}
        </div>
      </div>
    );
  }
}

class NavBar extends Component {
  render() {
    const chartist = {
      name: 'Chartist',
      component: <ChartistTest />,
    };
    const d3 = {
      name: 'D3',
      component: <D3 />,
    };
    const other = {
      name: 'Chart.js',
      component: <ChartJs />
    };
    return (
      <div id="exContainer">
        <Button {...chartist}/>
        <Button {...d3}/>
        <Button {...other} />
      </div>
    )
  }
};
export default NavBar;
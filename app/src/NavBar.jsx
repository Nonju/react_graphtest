import React, { Component } from 'react';
import ChartistTest from './Chartist';
import D3 from './D3/';
import ReactVis from './reactvis/'

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
    const reactvis = {
      name: 'React-vis',
      component: <ReactVis />,
    };
    const other = {
      name: 'Other',
      component: null
    };
    return (
      <div id="exContainer">
        <Button {...chartist}/>
        <Button {...d3}/>
        <Button {...reactvis}/>
        <Button {...other} />
      </div>
    )
  }
};
export default NavBar;
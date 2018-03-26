
// D3 examples: http://christopheviau.com/d3list/

import React from 'react';

import Bargraph from './bar/Bargraph';
import Piechart from './pie/Piechart';

export default () =>  (
    <div>

        <div id='bargraph-container'>
          <Bargraph parentWidth={600} />
        </div>

        <div id='piechart-container'>
            <Piechart parentWidth={600} />
        </div>
    </div>
);

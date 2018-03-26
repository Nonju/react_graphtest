
import React, { Component } from 'react';

import Bargraph from './bar/Bargraph';

export default () =>  (
    <div>
        <hr />
        <h1>D3 implementation</h1>

        <div id='bargraph-container'>
          <Bargraph parentWidth={600} />
          <Bargraph parentWidth={600} />
        </div>
    </div>
);

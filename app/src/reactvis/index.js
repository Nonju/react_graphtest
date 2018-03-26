
import React from 'react';

import data from './data';
import Bargraph from './Bargraph';
import Piechart from './Piechart';

export default () => (
  <div>
    <Bargraph />
    <Piechart data={data} />
  </div>
);

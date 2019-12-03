import './index.css';

import numeral from 'numeral'; // this is the library used to format the numbers.

const courseValue = numeral(1000).format('$0,0.00');
debugger;  // setting the breakpoint
console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console
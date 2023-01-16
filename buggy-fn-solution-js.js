'use strict';

const data = require('./data.js');

// This function is enough debugged
function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === 'undefined') return 2021;
        if (typeof elem.cvalue === 'string') return isNaN(elem.cvalue) ? 2021 : +elem.cvalue;
        if (typeof elem.cvalue === 'object') return summ(elem.cvalue);
        return elem.cvalue;
    });

    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

console.log(summ(data));

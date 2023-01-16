'use strict';

const data = require('./data.js');

interface SuperObj {
    [propName: string]: {
        cvalue: number | string | SuperObj;
    } | undefined;
}

// This function is enough debugged
function summ(a: SuperObj): number {
    const nanExtra = 2021;
    return Object.keys(a).reduce((last, k) => {
        const elem = a[k];
        if (!elem) return last + nanExtra;
        return last + ((cv): number => {
            if (typeof cv === 'string') return isNaN(+cv) ? nanExtra : +cv;
            if (typeof cv === 'object') return summ(cv);
            return cv;
        })(elem.cvalue);
    }, 0);
}

console.log(summ(data));

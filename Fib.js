'use strict';

function fib(n) {
    let array = new Array(0, 1);

    for (let i = 0; i <= n; i++)
    {
        if (array[i] === undefined)
        {
            array.push(array[i-1] + array[i-2]);
        }
        console.log(array[i]);
    }
  }
const length = 40;
fib(length);
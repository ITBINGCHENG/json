var abc = 'Hello, world';
console.log(abc);
alert('我不想执行');
alert('我也不想执行');

'use strict';
var arr = ['Bart', 'Lisa', 'Adam'];
for (i=0;i<arr.length; i++){
console.log(arr[i]);
alert(`hello ,${arr[i]}!`);
}

for (var i in arr){
    console.log(`Hello, ${arr[i]}!`);
}

function abs(x) {   //定义函数
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

alert(abs(5))

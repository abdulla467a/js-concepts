/* 
Falsy: 
false
0
empty string
undefined
null
NaN
-------------------
Truthy:
true
any number (positive or negative )
any string including single whitespace, '0', 'false'
[]
{}
anything else that is not falsy will be truthy
*/



// 1...............


// const x = true;
// if(x){
//     console.log('variable is true')
// }
// else {
//     console.log('variable is false')
// }

// 2.....................

// const x = 9;
// if(x){
//     console.log('variable is true')
// }
// else {
//     console.log('variable is false')
// }

// 3.....................

// const x = 'amir khan';
// if(x){
//     console.log('variable is true')
// }
// else {
//     console.log('variable is false')
// }


// 4........................

// const x = '';
// if(x){
//     console.log('variable is true')
// }
// else {
//     console.log('variable is false')
// }


// 5........................

let x = {};
console.log('value of x', x)
if (x) {
    console.log('variable is truthy');
}
else {
    console.log('variable is Falsy');
}
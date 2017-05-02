
let logmethod = require('../auto-logging.js').logmethod;
let logfunction = require('../auto-logging.js').logfunction;

class SuperNiceClass {
    constructor(){
        //some business here....
        console.log('hello from class');
        //some business here....
    }

    @logmethod
    bar(a,b) {
        //some business here....
        console.log('hello from bar method', a, b);
        //some business here....
    }
}

sum = logfunction(function sum(num1, num2) {
    return num1 + num2
})

x = new SuperNiceClass()
x.bar(1,2);
x.bar(1,2);

console.log(sum(2,3))
console.log(sum(2,3))

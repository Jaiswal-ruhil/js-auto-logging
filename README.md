
# Auto Logging decorator
logging using decorators


## Api :
```js
import {logmethod, logfunction} from 'auto-logging';

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

foo = new SuperNiceClass()
foo.bar(1,2);
foo.bar(1,2);

sum(2,3)
sum(5,9999)
```


# Auto Logging decorator
logging using decorators


## Api :
```js
let logmethod = require('auto-logging').logmethod;

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

x = new SuperNiceClass()
x.bar(1,2);
x.bar(1,2);
```

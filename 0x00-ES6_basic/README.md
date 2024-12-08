# alx-backend-javascript

TRAINING ON THE BASICS OF ECMASCRIPT6 JS

## Resources

+ [ECMAScript 6 - ECMAScript 2015](https://www.w3schools.com/js/js_es6.asp)
+ [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)
+ [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
+ [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
+ [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
+ [Javascript ES6 — Iterables and Iterators](https://towardsdatascience.com/javascript-es6-iterables-and-iterators-de18b54f4d4?gi=7739938d622a)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

+ What ES6 is
+ New features introduced in ES6
+ The difference between a constant and a variable
+ Block-scoped variables
+ Arrow functions and function parameters default to them
+ Rest and spread function parameters
+ String templating in ES6
+ Object creation and their properties in ES6
+ Iterators and for-of loops


## TASKS

1. **Const or Let?**

Modify

+ function taskFirst to instantiate variables using const
+ function taskNext to instantiate variables using let

```javascript
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

Execution example:

```bash
bob@dylan:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
bob@dylan:~$
```



Repo:

+ GitHub repository: **alx-backend-javascript**
+ Directory: **0x00-ES6_basic**
+ File: **0-constants.js**


1. **Block Scope**

Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

```javascript
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```

Execution:
```bash
bob@dylan:~$ cat 1-main.js
import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));
console.log(taskBlock(false));
bob@dylan:~$
bob@dylan:~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
bob@dylan:~$
```



Repo:

+ GitHub repository: **alx-backend-javascript**
+ Directory: **0x00-ES6_basic**
+ File: **1-block-scoped.js**


2. **Arrow functions**

Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

```javascript
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

Execution:

```bash
bob@dylan:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
bob@dylan:~$
bob@dylan:~$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
bob@dylan:~$
```

Repo:

+ GitHub repository: **alx-backend-javascript**
+ Directory: **0x00-ES6_basic**
+ File: **2-arrow.js**


3. **Parameter defaults**

Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.

```javascript
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```

Execution:

```bash
bob@dylan:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
bob@dylan:~$
bob@dylan:~$ npm run dev 3-main.js 
142
56
41
bob@dylan:~$
```

Repo:

+ GitHub repository: **alx-backend-javascript**
+ Directory: **0x00-ES6_basic**
+ File: **3-default-parameter.js**


4. **Rest parameter syntax for functions**

Modify the following function to return the number of arguments passed to it using the rest parameter syntax

```javascript
export default function returnHowManyArguments() {

}
```

Example:

```bash
> returnHowManyArguments("Hello", "ALX", 2020);
3
>
```

Execution:

```bash
bob@dylan:~$ cat 4-main.js
import returnHowManyArguments from './4-rest-parameter.js';

console.log(returnHowManyArguments("one"));
console.log(returnHowManyArguments("one", "two", 3, "4th"));
bob@dylan:~$
bob@dylan:~$ npm run dev 4-main.js 
1
4
bob@dylan:~$
```

Repo:

+ GitHub repository: alx-backend-javascript
+ Directory: 0x00-ES6_basic
+ File: 4-rest-parameter.js


5. **The wonders of spread syntax**

Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

```javascript
export default function concatArrays(array1, array2, string) {
}
```

Execution:

```bash
bob@dylan:~$ cat 5-main.js
import concatArrays from './5-spread-operator.js';

console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));

bob@dylan:~$
bob@dylan:~$ npm run dev 5-main.js 
[
  'a', 'b', 'c',
  'd', 'H', 'e',
  'l', 'l', 'o'
]
bob@dylan:~$
```

Repo:

+ GitHub repository: **alx-backend-javascript**
+ Directory: **0x00-ES6_basic**
+ File: **5-spread-operator.js**

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


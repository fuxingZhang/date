# date
date format, extends Date

## Install

```sh
$ npm i @zhangfuxing/date
```  

## Useage  

```js
const Dater = require('@zhangfuxing/date');
const assert = require('assert');
const util = require('util');

// toLocaleString
assert(new Dater() instanceof Date === true);
assert(util.types.isDate(new Dater()) === true);
assert(new Dater('2019/1/1 0:10:10').toLocaleString() === '2019-01-01 00:10:10');
assert(new Dater('2019/1/1 0:10:10').toLocaleString('.') === '2019.01.01 00:10:10');
assert(new Dater('2019/1/1 0:10:10').toLocaleString('/') === '2019/01/01 00:10:10');

// toLocaleDateString
assert(new Dater() instanceof Date === true);
assert(util.types.isDate(new Dater()) === true);
assert(new Dater('2019/1/1 0:10:10').toLocaleDateString() === '2019-01-01');
assert(new Dater('2019/1/1 0:10:10').toLocaleDateString('.') === '2019.01.01');
assert(new Dater('2019/1/1 0:10:10').toLocaleDateString('/') === '2019/01/01');
});

// Can use any method on Date.prototype
assert(new Dater().valueOf() === new Date().valueOf());
assert(new Dater().getFullYear() === new Date().getFullYear());
assert(new Dater('2019/1/1 0:10:10').getMilliseconds() === new Date('2019/1/1 0:10:10').getMilliseconds());
assert(new Dater('2019/1/1 0:10:10').getTimezoneOffset() === new Date('2019/1/1 0:10:10').getTimezoneOffset());
```  

## Definitions  
```ts
declare class Dater extends Date {
  /**
   * constructor
   * 
   *  - `param` optional, Date | dateString | timestamp
   */
  constructor(param?: Date | string | number);

  /**
   * toLocaleString
   * 
   *  - `separator` optional, date separator, default '-
   */
  toLocaleString(separator?: string): string;

  /**
   * toLocaleString
   * 
   *  - `separator` optional, date separator, default '-
   */
  toLocaleString(separator?: string): string;
}

export = Dater
```

## Test

```bash
$ npm test
```  
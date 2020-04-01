# date
date format, extends Date

## Install

```sh
$ npm i @zhangfuxing/date
```  

## Useage  

```js
const assert = require('assert');
const util = require('util');
const Dater = require('@zhangfuxing/date');

describe('#indexOf()', function () {
  it('instanceof and type should ok', async () => {
    assert(new Dater() instanceof Date === true);
    assert(util.types.isDate(new Dater()) === true);
  });

  it('toLocaleString should ok', async () => {
    assert(new Dater('2019/1/1 0:10:10').toLocaleString() === '2019-01-01 00:10:10');
    assert(new Dater('2019/1/1 0:10:10').toLocaleString('.') === '2019.01.01 00:10:10');
    assert(new Dater('2019/1/1 0:10:10').toLocaleString('/') === '2019/01/01 00:10:10');
  });

  it('toLocaleDateString should ok', async () => {
    assert(new Dater('2019/1/1 0:10:10').toLocaleDateString() === '2019-01-01');
    assert(new Dater('2019/1/1 0:10:10').toLocaleDateString('.') === '2019.01.01');
    assert(new Dater('2019/1/1 0:10:10').toLocaleDateString('/') === '2019/01/01');
  });

  it('toLocaleTimeString should ok', async () => {
    assert(new Dater('2019/1/1 0:10:10').toLocaleTimeString() === '00:10:10');
  });

  it('other methods on Date.prototype', async () => {
    assert(new Dater().valueOf() === new Date().valueOf());
    assert(new Dater().getFullYear() === new Date().getFullYear());
    assert(new Dater('2019/1/1 0:10:10').getMilliseconds() === new Date('2019/1/1 0:10:10').getMilliseconds());
    assert(new Dater('2019/1/1 0:10:10').getTimezoneOffset() === new Date('2019/1/1 0:10:10').getTimezoneOffset());
  });
});
```  

## Definitions  
```ts
declare class Dater extends Date {
  /**
   * Converts a date and time to a string
   * 
   * @param separator optional, date separator, default: "-"
   */
  toLocaleString(separator?: string): string;

  /**
   * Converts a date to a string
   * 
   * @param separator optional, date separator, default: "-"
   */
  toLocaleDateString(separator?: string): string;

  /**
   * Converts a time to a string
   */
  toLocaleTimeString(separator?: string): string;
}

export = Dater
```

## Test

```bash
$ npm test
```  
'use strict';

const assert = require('assert');
const Dater = require('../index');
const util = require('util');

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

  it('other methods on Date.prototype', async () => {
    assert(new Dater().valueOf() === new Date().valueOf());
    assert(new Dater().getFullYear() === new Date().getFullYear());
    assert(new Dater('2019/1/1 0:10:10').getMilliseconds() === new Date('2019/1/1 0:10:10').getMilliseconds());
    assert(new Dater('2019/1/1 0:10:10').getTimezoneOffset() === new Date('2019/1/1 0:10:10').getTimezoneOffset());
  });
});
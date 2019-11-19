'use strict';

const assert = require('assert');
const Dater = require('../lib');
const util = require('util');

describe('#indexOf()', function () {
  it('toLocaleString should ok', async () => {
    assert(util.types.isDate(new Dater()) === true);
    assert(new Dater('2019/1/1 0:10:10').toLocaleString() === '2019-01-01 00:10:10');
    assert(new Dater('2019/1/1 0:10:10').toLocaleString('.') === '2019.01.01 00:10:10');
    assert(new Dater('2019/1/1 0:10:10').toLocaleString('/') === '2019/01/01 00:10:10');
  });

  it('toLocaleDateString should ok', async () => {
    assert(util.types.isDate(new Dater()) === true);
    assert(new Dater('2019/1/1 0:10:10').toLocaleDateString() === '2019-01-01');
    assert(new Dater('2019/1/1 0:10:10').toLocaleDateString('.') === '2019.01.01');
    assert(new Dater('2019/1/1 0:10:10').toLocaleDateString('/') === '2019/01/01');
  });
});
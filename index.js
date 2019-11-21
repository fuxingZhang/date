'use strict'

const format = n => n > 9 ? n : `0${n}`;

class Dater extends Date {
  /**
   * @constructor
   * @param {Date | dateString | timestamp} [param] 
   */
  constructor() {
    super(...arguments);
  }

  /**
   * toLocaleString
   * 
   * @param {String} [separator='-'] date separator
   */
  toLocaleString(separator = '-') {
    const year = format(this.getFullYear());
    const month = format(this.getMonth() + 1);
    const day = format(this.getDate());
    const hour = format(this.getHours());
    const minute = format(this.getMinutes());
    const second = format(this.getSeconds());
    return `${year}${separator}${month}${separator}${day} ${hour}:${minute}:${second}`;
  }

  /**
   * toLocaleDateString
   * 
   * @param {String} [separator='-'] date separator
   */
  toLocaleDateString(separator = '-') {
    const year = format(this.getFullYear());
    const month = format(this.getMonth() + 1);
    const day = format(this.getDate());
    return `${year}${separator}${month}${separator}${day}`;
  }
}

module.exports = Dater
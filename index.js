'use strict'

// const format = n => n > 9 ? n : `0${n}`;
const format = n => n.toString().padStart(2, 0);

class Dater extends Date {
  /**
   * @constructor
   * @param {Date | dateString | timestamp} [args] 
   */
  constructor() {
    super(...arguments);
  }

  /**
   *  Converts a date and time to a string
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
   * Converts a date to a string
   * 
   * @param {String} [separator='-'] date separator
   */
  toLocaleDateString(separator = '-') {
    const year = format(this.getFullYear());
    const month = format(this.getMonth() + 1);
    const day = format(this.getDate());
    return `${year}${separator}${month}${separator}${day}`;
  }

  /**
   * Converts a time to a string
   */
  toLocaleTimeString() {
    const hour = format(this.getHours());
    const minute = format(this.getMinutes());
    const second = format(this.getSeconds());
    return `${hour}:${minute}:${second}`;
  }
}

module.exports = Dater
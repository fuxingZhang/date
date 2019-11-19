// Type definitions

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
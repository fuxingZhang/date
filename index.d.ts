// Type definitions

declare class Dater extends Date {
  /**
   * Converts a date and time to a string
   * 
   * @param separator optional, date separator, default '-
   */
  toLocaleString(separator?: string): string;

  /**
   * Converts a date to a string
   * 
   * @param separator optional, date separator, default '-
   */
  toLocaleDateString(separator?: string): string;
}

export = Dater
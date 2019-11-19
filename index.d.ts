// Type definitions

export interface Options {
  param?: Date | dateString | timestamp,
  separator?: string
}

/**
 * toLocaleString
 *   - `param` Date or can be new Date() 
 *   - `separator` date separator, default: "-"
 */
export function toLocaleString(option: options): Date

/**
 * toLocaleDateString
 *   - `param` Date or can be new Date() 
 *   - `separator` date separator, default: "-"
 */
export function toLocaleDateString(option: options): Date
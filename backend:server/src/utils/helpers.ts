/**
 *
 * @param obj
 * @param field
 * @returns new Obj
 */
export function omit<T>(obj: T, fields: (keyof T)[]): T {
    const rest: Partial<T> = {};
  
    for (const key in obj) {
      if (!fields.includes(key as keyof T)) {
        rest[key] = obj[key];
      }
    }
  
    return rest as T;
  }
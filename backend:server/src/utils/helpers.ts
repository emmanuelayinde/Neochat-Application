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



export function removeFields<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  fieldsToRemove: K[]
): Omit<T, K> {
  const newObj = { ...obj };

  fieldsToRemove.forEach((field) => {
    delete newObj[field];
  });

  return newObj;
}


export function selectFields<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  fieldsToSelect: K[]
): Pick<T, K> {
  const newObj: Partial<Pick<T, K>> = {}; // Partial to allow assignment without all fields

  fieldsToSelect.forEach((field) => {
    newObj[field] = obj[field];
  });

  return newObj as Pick<T, K>; // Cast back to the correct type
}

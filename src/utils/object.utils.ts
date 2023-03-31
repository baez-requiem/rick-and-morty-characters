export function removeEmptyFields<T extends Record<string, any>>(obj: T): T {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === '') {
      delete obj[key];
    }
  }
  return obj;
}
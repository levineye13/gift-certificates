export const convertObjectKeys = <T>(
  obj: T,
  switchCase: 'lower' | 'upper'
): T => {
  const newObj: T = {} as T;

  for (const key in obj) {
    let newKey;

    if (switchCase === 'lower') {
      newKey = key.toLowerCase() as keyof T;
    } else {
      newKey = key.toUpperCase() as keyof T;
    }

    newObj[newKey] = obj[key];
  }

  return newObj;
};

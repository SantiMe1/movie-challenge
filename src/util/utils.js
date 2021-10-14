// Using this to avoid importing lodash just for deepClone.
export const deepClone = (arr) => JSON.parse(JSON.stringify(arr));

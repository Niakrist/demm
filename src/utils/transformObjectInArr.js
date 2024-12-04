export const transformObjectInArr = (object) => {
  const arr = [];
  for (const eleme in object) {
    arr.push({ id: eleme, name: object[eleme] });
  }
  return arr;
};

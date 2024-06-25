export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    newArray = appendString + idx;
  }

  return newArray;
}

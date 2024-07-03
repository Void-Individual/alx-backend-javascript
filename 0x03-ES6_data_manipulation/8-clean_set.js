export default function cleanSet(set, start) {
  if (!start || start.length === 0) {
    return '';
  }

  let newString = '';
  let x = 0;

  for (const str of set) {
    if (!str) {
      continue;
    }
    const cutStr = str.slice(0, start.length);
    if (cutStr === start) {
      if (x !== 0) {
        newString += '-';
      }
      newString += str.slice(start.length);
      x += 1;
    }
  }
  return newString;
}

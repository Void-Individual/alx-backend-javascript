export default function iterateThroughObject(reportWithIterator) {
  const len = reportWithIterator.length;
  let x = 0;
  let names = '';
  for (const name of reportWithIterator) {
    names += name;
    if (x < len - 1) {
      names += ' | ';
    }
    x += 1;
  }
  return names;
}

export default function divideFunction(numerator, denominator) {
  let val;
  if (denominator === 0) {
    throw (Error('cannot divide by 0'));
  }
  return numerator / denominator;
}

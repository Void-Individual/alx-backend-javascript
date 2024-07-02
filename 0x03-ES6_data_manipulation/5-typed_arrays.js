export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // Create a new aarray buffer with a specified length
  const buffer = new ArrayBuffer(length);

  // Create a dataview to work with the buffer
  const int8Array = new DataView(buffer);

  int8Array.setInt8(position, value);

  // This wont return the same as if you simply used:
  // const array = new Int8array to declare a new int8 array
  return int8Array;
}

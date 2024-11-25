export default function createInt8TypedArray(lenght, position, value) {
  const buffer = new ArrayBuffer(lenght);
  if (position < 0 || position >= lenght) {
    throw new Error('Position outside range');
  }
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);
  return dataView;
}

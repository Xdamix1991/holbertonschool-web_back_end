export default function updateUniqueItems(theMap) {
  for (const [key, value] of theMap) {
    if (value === 1) {
      theMap.set(key, 100);
    }
  }
  return theMap;
}

export default function cleanSet(set, startString) {
  const filteredValues = [];

  set.forEach((value) => {
    if (value.startsWith(startString)) {
      filteredValues.push(value.substring(startString.length));
    }
  });

  const resultString = filteredValues.join('-');
  return resultString;
}

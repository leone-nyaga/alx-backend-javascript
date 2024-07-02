export default function updateUniqueItems(groceriesMap) {
  // Validate if the argument is a Map
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the entries of the Map to update quantities
  groceriesMap.forEach((quantity, item) => {
    if (quantity === 1) {
      // Update quantity to 100 for items with initial quantity of 1
      groceriesMap.set(item, 100);
    }
  });
}

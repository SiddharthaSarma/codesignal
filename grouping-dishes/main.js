function groupingDishes(dishes) {
  const groupedDishes = dishes.reduce((obj, e) => {
    for (let i = 1; i < e.length; i++) {
      if (obj.hasOwnProperty(e[i])) {
        obj[e[i]].push(e[0]);
      } else {
        obj[e[i]] = [e[0]];
      }
    }
    return obj;
  }, {});

  const lexicographicallyKeys = Object.keys(groupedDishes).sort();
  const output = [];
  for (let i = 0; i < lexicographicallyKeys.length; i++) {
    if (groupedDishes[lexicographicallyKeys[i]].length > 1) {
      output.push([lexicographicallyKeys[i], ...groupedDishes[lexicographicallyKeys[i]].sort()]);
    }
  }
  return output;
}

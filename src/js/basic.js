export default function orderByProps(obj, order) {
  const sortedList1 = [];
  const sortedList2 = [];
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      const line = {};
      line.key = prop;
      line.value = obj[prop];
      const index = order.indexOf(prop);
      if (index !== -1) {
        sortedList1[index] = line;
      } else {
        sortedList2.push(line);
      }
    }
  }
  sortedList2.sort((a, b) => (a.key > b.key ? 1 : -1));
  return sortedList1.concat(sortedList2);
}

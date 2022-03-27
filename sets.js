const ids = new Set();

ids.add(1);
ids.add(2);

ids.add(3);

ids.delete(3);

console.log(ids.has(2));
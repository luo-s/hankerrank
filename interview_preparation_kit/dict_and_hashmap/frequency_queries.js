/*
You are given q queries. Each query is of the form two integers described below:
- 1 x : Insert x in your data structure.
- 2 y : Delete one occurence of y from your data structure, if present.
- 3 z : Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0.

The queries are given in the form of a 2-D array queries of size q 
where queries[i][0] contains the operation, 
and queries[i][1] contains the data element.
*/

// https://www.hackerrank.com/challenges/frequency-queries/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function freqQuery(queries) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    let [op, val] = queries[i];
    if (op === 1) {
      map.set(val, (map.get(val) || 0) + 1);
    } else if (op === 2) {
      if (map.has(val) && map.get(val) > 0) {
        map.set(val, map.get(val) - 1);
      }
    } else if (op === 3) {
      let found = false;
      for (let [key, value] of map.entries()) {
        if (value === val) {
          result.push(1);
          found = true;
          break;
        }
      }
      if (!found) result.push(0);
    }
  }
  return result;
}

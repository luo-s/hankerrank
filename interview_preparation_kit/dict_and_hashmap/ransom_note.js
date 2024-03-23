/*
Given the words in the magazine and the words in the ransom note, 
print Yes if he can replicate his ransom note exactly using whole words from 
the magazine; otherwise, print No.
*/

// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// time complexity: O(m+n)
// space complexity: O(m)
function checkMagazine(magazine, note) {
  if (note.length > magazine.length) {
    console.log("No");
    return;
  }
  const mapMagazine = new Map();
  for (let word of magazine) {
    mapMagazine.set(word, (mapMagazine.get(word) || 0) + 1);
  }
  for (let word of note) {
    if (!mapMagazine.has(word) || mapMagazine.get(word) === 0) {
      console.log("No");
      return;
    } else {
      mapMagazine.set(word, mapMagazine.get(word) - 1);
    }
  }
  console.log("Yes");
  return;
}

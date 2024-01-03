/*
Given the words in the magazine and the words in the ransom note, 
print Yes if he can replicate his ransom note exactly using whole words from 
the magazine; otherwise, print No.
*/

// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// time complexity: O(m+2n)
// space complexity: O(m+n)
function checkMagazine(magazine, note) {
  if (note.length > magazine.length) {
    console.log("No");
    return;
  }
  const mapMagazine = new Map();
  const mapNote = new Map();
  for (let word of magazine) {
    mapMagazine.set(word, (mapMagazine.get(word) || 0) + 1);
  }
  for (let word of note) {
    mapNote.set(word, (mapNote.get(word) || 0) + 1);
  }
  for (let [word, count] of mapNote.entries()) {
    if (!mapMagazine.has(word) || mapMagazine.get(word) < count) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
  return;
}

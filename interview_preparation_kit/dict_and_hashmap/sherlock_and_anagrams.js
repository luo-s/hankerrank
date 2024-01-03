/*
Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. 
Given a string, find the number of pairs of substrings of the string that are anagrams of each other.
s contains only lowercase letters in the range ascii[a-z].
2 <= s.length <= 100
*/

// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// brute force
// time complexity: O(n^3)
// space complexity: O(n)
function sherlockAndAnagrams(s) {
  function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const map = {};
    for (let i = 0; i < str1.length; i++) {
      map[str1[i]] = map[str1[i]] ? map[str1[i]] + 1 : 1;
    }
    for (let i = 0; i < str2.length; i++) {
      if (map[str2[i]] === undefined) return false;
      map[str2[i]]--;
      if (map[str2[i]] < 0) return false;
    }
    return true;
  }
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 1; j < s.length - i; j++) {
      for (let k = i + 1; k < s.length - j + 1; k++) {
        if (isAnagram(s.slice(i, i + j), s.slice(k, k + j))) {
          count++;
        }
      }
    }
  }
  return count;
}

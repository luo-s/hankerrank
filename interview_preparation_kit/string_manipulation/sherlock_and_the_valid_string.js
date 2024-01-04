/*
Sherlock considers a string to be valid if all characters of the string 
appear the same number of times. It is also valid if he can remove just 1 
character at 1 index in the string, and the remaining characters will occur 
the same number of times. Given a string s, determine if it is valid. 
If so, return YES, otherwise return NO.
*/

// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

// time complexity: O(n)
// space complexity: O(n)
function isValid(s) {
  // generate a map of character frequencies
  let sKey = new Map();
  for (let char of s) {
    sKey.set(char, sKey.get(char) + 1 || 1);
  }
  // sort the frequencies
  let freq = [...sKey.values()].sort((a, b) => a - b);
  let min = freq[0];
  let max = freq[freq.length - 1];
  // determine if the string is valid
  if (min === max) return "YES";
  else {
    if (freq[freq.length - 2] === min && max - min === 1) return "YES";
    if (min === 1 && freq[1] === max) return "YES";
  }
  return "NO";
}

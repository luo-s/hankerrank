/*
A string is said to be a special string if either of two conditions is met:
  1. All of the characters are the same, e.g. aaa.
  2. All characters except the middle one are the same, e.g. aadaa.

A special substring is any substring of a string which meets one of those 
criteria. Given a string, determine how many special substrings can be 
formed from it.
*/

// https://www.hackerrank.com/challenges/special-palindrome-again/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

// brute force
// time complexity: O(n^3)
// space complexity: O(n)
function substrCount(n, s) {
  // special string determination function
  var isSpecial = function (str) {
    if (str.length === 1) return true;
    if (str.length % 2 === 0) {
      for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[0]) return false;
      }
      return true;
    } else {
      let mid = Math.floor(str.length / 2);
      for (let i = 0; i < str.length; i++) {
        if (i === mid) continue;
        if (str[i] !== str[0]) return false;
      }
      return true;
    }
  };
  // count special substrings
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const str = s.substring(i, j);
      console.log(i, j, str);
      if (isSpecial(str)) count++;
    }
  }
  return count;
}

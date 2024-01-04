/*
You are given a string containing characters A and B only. 
Your task is to change it into a string such that there are no matching 
adjacent characters. 
To do this, you are allowed to delete zero or more characters in the string.

Find the minimum number of required deletions.
*/

// https://www.hackerrank.com/challenges/alternating-characters/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

// time complexity: O(n)
// space complexity: O(1)
function alternatingCharacters(s) {
  let count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i + 1] === s[i]) count++;
  }
  return count;
}

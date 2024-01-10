/*
A string is said to be a child of a another string if it can be formed by 
deleting 0 or more characters from the other string. Letters cannot be 
rearranged. 

Given two strings of equal length, what's the longest string that can be 
constructed such that it is a child of both?
*/

// https://www.hackerrank.com/challenges/common-child/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

// dynamic programming
// Time complexity: O(m * n)
// Space complexity: O(m * n)
function commonChild(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  // Create a 2D array to store the length of common subsequences
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  // Fill the dp array using bottom-up dynamic programming
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  // The length of the LCS is stored in dp[m][n]
  return dp[m][n];
}

console.log(commonChild("HARRY", "SALLY")); // 2
console.log(commonChild("AA", "BB")); // 0
console.log(commonChild("SHINCHAN", "NOHARAAA")); // 3
console.log(
  commonChild(
    "WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS",
    "FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC"
  )
); // 15

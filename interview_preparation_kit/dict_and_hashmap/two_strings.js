/*
Given two strings, determine if they share a common substring. 
A substring may be as small as one character.
*/

// https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// if the have a multi-character common substring, they must have a single character common substring.
// thus, we can just check if they have common letters.
// time complexity: O(n+m)
// space complexity: O(n)
function twoStrings(s1, s2) {
    let set1 = new Set(s1);
    for (let char of s2) {
        if (set1.has(char)) {
            return "YES";
        }
    }
    return "NO";
}
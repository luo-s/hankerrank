/*
Given the value of money and the cost of each flavor for t trips to the Ice Cream Parlor, 
help Sunny and Johnny choose two distinct flavors such that they spend their 
entire pool of money during each visit. 

ID numbers are the 1- based index number associated with a cost. For each 
trip to the parlor, print the ID numbers for the two types of ice cream 
that Sunny and Johnny purchase as two space-separated integers on a new line. 
You must print the smaller ID first and the larger ID second.

Two ice creams having unique IDs  and  may have the same cost.
There will always be a unique solution.
1 <= t <= 50
2 <= money <= 10^9
2 <= n <= 5 * 10^4
1 <= cost[i] <= 10^9
*/

// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
// related topics: two sums https://leetcode.com/problems/two-sum/description/
// hash table
// time complexity O(n)
// space complexity O(n)
function whatFlavors(cost, money) {
  let checked = {};
  for (let i = 0; i < cost.length; i++) {
    const target = money - cost[i];
    if (checked[target] !== undefined) {
      console.log(checked[target], i + 1);
    } else {
      checked[cost[i]] = i + 1;
    }
  }
}

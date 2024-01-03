/*
HackerLand National Bank has a simple policy for warning clients about possible 
fraudulent account activity. If the amount spent by a client on a particular day 
is greater than or equal to 2 times the client's median spending for a trailing 
number of days, they send the client a notification about potential fraud. 

Given the number of trailing days d and a client's total daily expenditures for a 
period of  days, determine the number of times the client will receive a 
notification over all n days.

1 <= n <= 2 * 10^5
1 <= d <= n
0 <= expenditure[i] <= 200
*/

// https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

// brute force
// time complexity: O(n * d * log(d))
// space complexity: O(d)
function activityNotifications(expenditure, d) {
  var getMedian = (arr) => {
    arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    return arr.length % 2 === 0 ? (arr[mid] + arr[mid - 1]) / 2 : arr[mid];
  };
  let res = 0;
  for (let i = d; i < expenditure.length; i++) {
    let median = getMedian(expenditure.slice(i - d, i));
    if (expenditure[i] >= median * 2) res++;
  }
  return res;
}

// optimized solution
// time complexity: O(n * d)
// space complexity: O(1)
function activityNotifications(expenditure, d) {
  let res = 0;
  // initialize the median array
  let medianArr = new Array(201).fill(0);
  for (let i = 0; i < d; i++) {
    medianArr[expenditure[i]]++;
  }
  // get the median
  let getMedian = () => {
    if (d % 2 === 1) {
      let count = 0;
      for (let i = 0; i < medianArr.length; i++) {
        count += medianArr[i];
        if (count > d / 2) return i;
      }
    } else {
      let count = 0;
      let first = null;
      let second = null;
      for (let i = 0; i < medianArr.length; i++) {
        count += medianArr[i];
        if (first === null && count >= d / 2) first = i;
        if (second === null && count >= d / 2 + 1) second = i;
        if (first !== null && second !== null) return (first + second) / 2;
      }
    }
  };
  // check the notification
  for (let i = d; i < expenditure.length; i++) {
    let median = getMedian();
    if (expenditure[i] >= median * 2) res++;
    // update the median array
    medianArr[expenditure[i - d]]--;
    medianArr[expenditure[i]]++;
  }
  return res;
}

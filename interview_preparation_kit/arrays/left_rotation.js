/*
A left rotation operation on an array shifts each of the array's elements 1 unit to the left. 
For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2]. 
Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

Given an array a of n integers and a number d, perform d left rotations on the array. 
Return the updated array to be printed as a single line of space-separated integers.
*/

// slice() method
// time complexity: O(n)
// space complexity: O(n)
function rotLeft(a, d) {
    d %= a.length;
    let res = a.slice(d);
    res.push(...a.slice(0, d));
    return res;
}

// index shifting
// time complexity: O(n)
// space complexity: O(n)
function rotLeft(a, d) {
    d %= a.length;
    let res = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        res[i] = a[(i + d) % a.length];
    }
    return res;
}

// concat and slicing
// time complexity: O(n)
// space complexity: O(n)
function rotLeft(a, d) {
    d %= a.length;
    let res = a.concat(a);
    return res.slice(d, d + a.length);
}
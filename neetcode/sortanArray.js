/**
 Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
 

Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let nums = [5, 1, 1, 2, 0, 0];

// insertion sort
// var sortArray1 = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         let j = i + 1;
//         while (j >= 0 && nums[j] < nums[j - 1]) {
//             let temp = nums[j - 1];
//             nums[j - 1] = nums[j];
//             nums[j] = temp;
//             j--;
//         }
//     }
//     return nums;
// };

// merge sort
var sortArray = function (nums) {
    return mergeSort(nums, 0, nums.length - 1);
};

function mergeSort(arr, left, right) {
    if (left === right) {
        return arr;
    }

    let mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    return merge(arr, left, mid, right);
};

function merge(arr, left, mid, right) {
    let arr1 = arr.slice(left, mid + 1);
    let arr2 = arr.slice(mid + 1, right + 1);

    let p1 = 0;
    let p2 = 0;
    let gp = left;

    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] < arr2[p2]) {
            arr[gp] = arr1[p1];
            p1++;
        } else {
            arr[gp] = arr2[p2];
            p2++;
        }
        gp++
    }

    while (p1 < arr1.length) {
        arr[gp] = arr1[p1];
        p1++;
        gp++;
    }
    while (p2 < arr2.length) {
        arr[gp] = arr2[p2];
        p2++;
        gp++;
    }

    return arr;
}
// const sortArray = function (nums) {
//     return mergeSort(0, nums.length - 1, nums);
// };

// const mergeSort = (left, right, nums) => {

//     if (left === right) return nums;

//     const mid = Math.floor((left + right) / 2);
//     mergeSort(left, mid, nums);
//     mergeSort(mid + 1, right, nums);
//     return merge(left, right, mid, nums);
// }

// const merge = (left, right, mid, nums) => {
//     const arr1 = nums.slice(left, mid + 1);
//     const arr2 = nums.slice(mid + 1, right + 1);

//     let p1 = 0;
//     let p2 = 0;
//     let gp = left;

//     while (p1 < arr1.length && p2 < arr2.length) {
//         if (arr1[p1] < arr2[p2]) {
//             nums[gp] = arr1[p1];
//             p1++;
//         } else {
//             nums[gp] = arr2[p2];
//             p2++;
//         }
//         gp++;
//     }

//     while (p1 < arr1.length) {
//         nums[gp] = arr1[p1];
//         p1++;
//         gp++;
//     }

//     while (p2 < arr2.length) {
//         nums[gp] = arr2[p2];
//         p2++;
//         gp++;
//     }
//     return nums;
// }

console.log(sortArray(nums));

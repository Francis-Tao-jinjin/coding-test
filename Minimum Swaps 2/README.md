# Minimum Swaps 2

https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen

You are given an unordered array consisting of consecutive integers `∈ [1, 2, 3, ..., n]` without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

For example, given the array `arr = [7, 1, 3, 2, 4, 5, 6]` we perform the following steps:

```
i   arr                         swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]
```

It took 5 swaps to sort the array.

**Function Description**

Complete the function minimumSwaps in the editor below. It must return an integer representing the minimum number of swaps to sort the array.

minimumSwaps has the following parameter(s):

- arr: an unordered array of integers

**Input Format**

The first line contains an integer, , the size of .
The second line contains  space-separated integers .

**Constraints**

- 1 <= n <= 10^5
- 1 <= arr[i] <= n

**Output Format**

Return the minimum number of swaps to sort the given array.

**Sample Input 0**
```
4
4 3 1 2
```
**Sample Output 0**
```
3
```
**Explanation 0**

Given array `arr: [4, 3, 2, 2]`
After swapping (0, 2) we get `arr:[1 ,3 ,4 ,2]`
After swapping (1, 2) we get `arr:[1, 4, 3, 2]`
After swapping (1, 3) we get `arr:[1, 2, 3, 4]`
So, we need a minimum of 3 swaps to sort the array in ascending order.

**Sample Input 1**

```
5
2 3 4 1 5
```
Sample Output 1
```
3
```
**Explanation 2**

Given array `arr:[1, 3, 5, 2, 4, 6, 7]`

After swapping (1, 3) we get `arr:[1,2,5,3,4,6,7]`

After swapping (2, 3) we get `arr:[1,2,3,5,4,6,7]`

After swapping (3, 4) we get `arr:[1,2,3,4,5,6,7]`

So, we need a minimum of 3 swaps to sort the array in ascending order.

## Solution:

Since the arr we get will consisting of consecutive integers and have `1` in it, the sorted arr will always look like `[1,2,3,4,5,6, ... , n]`. The problem has become much easier. For each number in the array, the correct position will be it's value minus 1 :
```js
// i is the current position, arr is the array
const currentPos = i;
const value = arr[i];
const correctPos = value - 1;
```
In this case, we just need to loop all the item of array, and keep swaping the item from `i to arr[i] - 1` if the `i` is not equal to `arr[i]-1`.





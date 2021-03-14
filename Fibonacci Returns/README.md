# Fibonacci Returns

https://www.hackerrank.com/contests/programming-interview-questions/challenges/fibonacci-returns

This question expands on our earlier Fibonacci Lite challenge. While the goal of Fibonacci Lite was to understand recursion, this challenge is about solving problems efficiently with dynamic programming.

The difference in this challenge is that each test case will consist of many inputs instead of just one. Furthermore, we're allowing larger values of n. You'll need to use dynamic programming to solve all the inputs without running out of time.

So, given many numbers n, print the nth value of the Fibonacci sequence for each of them, in order, on their own line.

Here are the definitions of the sequence again:

    Fn = F<n - 1> + F<n - 2>

Using the following seed values:

    F0 = 0, F1 = 1

### Examples

Input (one on each line rather than spaces):

```
1
2
3
4
5
6
7
8
9
10
```
Output (one on each line rather than spaces):

```
1
1
2
3
5
8
13
21
34
55
```

Input (one on each line rather than spaces):

```
41
8
22
```

Output (one on each line rather than spaces):

```
165580141
21
17711
```

### General Approach

1. Find the base case(s),
Have your function recognize the base case(s) and provide a solution,
2. Recognize if you have already solved this input,
3. Recursively define a solution to the sub-problem for other inputs,
4. Call your function on the input and print the result to STDOUT.

### Things to think about
- If your language doesn't support tail call elimination, you might want to use an iterative approach this time.
- How will you recognize if you already have a solution for a given sub-problem?
- How do you plan to store your previous solutions? Are there major trade-offs for using different data structures in this case?
- Input Format and Restrictions
Each test case will consist of several positive integers n, each on their own line.

The inputs will always satisfy the following restrictions:

- Fn < 2^64 - 1,
- 0 <= n < 100


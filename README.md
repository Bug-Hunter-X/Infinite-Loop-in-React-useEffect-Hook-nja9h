# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications where an infinite loop is created within the `useEffect` hook.  The bug arises from incorrectly updating the state within the `useEffect` dependency array, causing a continuous re-render and subsequent state update.

## Bug Description
The `bug.js` file contains a `MyComponent` which uses the `useEffect` hook to increment a counter.  The counter is updated within the effect which has no dependencies, creating an infinite loop. 

## Solution
The `bugSolution.js` file provides a corrected version. The key change is correctly setting up the dependency array in useEffect to fix the issue. Refer to the file for the changes made.

## How to reproduce the error
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install`.
4. Run `npm start`.
5. Observe the browser console for error messages (in the case of the bug file).

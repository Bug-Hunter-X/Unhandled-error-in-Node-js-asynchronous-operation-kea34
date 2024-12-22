# Unhandled Error in Node.js Asynchronous Operation

This repository demonstrates a common error in Node.js: unhandled errors in asynchronous operations.  Improper error handling can lead to unexpected crashes or silent failures.

## The Problem

Asynchronous operations in Node.js, such as HTTP requests, often use callbacks or promises.  If these operations encounter errors and those errors aren't handled correctly, the application may terminate abruptly or continue running with unforeseen consequences.

The `bug.js` file shows an example of an asynchronous HTTP request without proper error handling.  The solution, `bugSolution.js`, demonstrates how to correctly handle potential errors.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js` (this will show the problematic behavior). 
4. Run `node bugSolution.js` (this will show the improved error handling).
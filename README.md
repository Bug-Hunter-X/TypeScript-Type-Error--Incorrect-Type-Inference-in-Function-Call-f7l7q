# TypeScript Type Error: Incorrect Type Inference in Function Call

This repository demonstrates a type error in TypeScript related to incorrect type inference in a function call. The `add` function is defined to take two number arguments, but a string is passed as an argument, resulting in a runtime error instead of a compile-time error.

## Bug

The `bug.ts` file contains the buggy code where a string is passed to a function expecting a number. This should be caught as a type error by the TypeScript compiler. The current behavior is that it compiles without errors, leading to runtime errors when executed.

## Solution

The `bugSolution.ts` file contains a corrected version where TypeScript's type checking correctly identifies and flags the type error in the function call, preventing the compilation.
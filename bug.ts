function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is correctly inferred as number
let result2 = subtract(10, 5); // result2 is correctly inferred as number

// However, this is a type error and should not compile:
let result3 = add(5, "3");
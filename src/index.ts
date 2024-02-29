export { };

// An expression of type 'void' cannot be tested for truthiness

// EXAMPLE 1 - Make sure to return a value from the function

// 👇️ function now returns a value
function sum(a: number, b: number): number {
  const result = a + b;

  return result; // 👈️ explicit return
}

const result = sum(10, 10) ? 20 : 0;

if (sum(10, 10)) {
  console.log('success');
}

// ---------------------------------------------------

// // EXAMPLE 2 - Function must return the expected value

// // 👇️ implicit return with objects
// const getObj = () => ({
//   name: 'Bobby Hadz',
//   country: 'Chile',
// });

// // 👇️ implicit return with primitives
// const getNum = (a: number, b: number) => a + b;

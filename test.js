export function add(a,b){
  return a + b;
}
export function subtract(a,b){
  return a - b;
}
export function multiply(a,b){
  return a * b;
}
export function divide(a,b){
  if (b === 0) throw new Error("Division by zero");
  return b !== 0 ? a/b : null;
}
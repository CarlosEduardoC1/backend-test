import { FactorialResponse } from "../types";

export function factorialize(factor: number): FactorialResponse | Error {
  let message: string = `The factorial calculation is: !${factor} = ${factor}`;
  if (factor === 0 || factor === 1) return { result: 1, message };
  for (var i = factor - 1; i >= 1; i--) {
    factor *= i;
    message = message + ` * ${i}`;
  }

  if (factor === Infinity)
    return new Error("This number results on infity by computer calculation.");
  return { result: factor, message };
}

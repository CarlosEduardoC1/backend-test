import { MathOperations } from "../types";

const OP: MathOperations[] = ["+", "-", "*", "/"];

const calc = {
  "*": (a: number, b: number): number => a * b,
  "/": (a: number, b: number): number => a / b,
  "+": (a: number, b: number): number => a + b,
  "-": (a: number, b: number): number => a - b,
};

export function calculator(
  toCalculate: string
): { result: number; message: string } | Error {
  toCalculate = toCalculate.replace(/ +/g, "");

  const values = [...toCalculate.matchAll(/(-?[\d.]+)([*\/+-])?/g)]
    .flat()
    .filter((x, i) => x && i % 3);

  const hasOperation = values.some((value) => OP.map((e) => e == value));

  if (!hasOperation || values.length > 3) {
    return new Error("Please, select a valid operation");
  }
  if (!Number(values[0]) || !Number(values[2])) {
    return new Error("Please, inform a valid operation");
  } else {
    const sum: number = calc[values[1] as MathOperations](
      Number(values[0]),
      Number(values[2])
    );

    return { result: sum, message: "" };
  }
}

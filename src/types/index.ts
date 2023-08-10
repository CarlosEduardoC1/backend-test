export type MathOperations = "+" | "-" | "*" | "/";

export type PrimeNumberResponse = {
  isPrime: boolean;
  message: string;
  primeNumberList: number[];
};

export type FactorialResponse = {
    result: number;
    message: string;
}
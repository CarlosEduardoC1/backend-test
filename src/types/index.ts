export type MathOperations = "+" | "-" | "*" | "/";

export type PrimeNumberResponse = {
  isPrime: boolean;
  message: string;
  primeNumberList: number[];
};

export type FactorialResponse = {
  result: number;
  message: string;
};

export type PalindromeResponse = {
  isPalindrome: boolean;
  inserted: string;
  reverse: string;
};

export type VowelCounterResponse = {
  vowelsQuantity: number;
  vowelsList: string[];
  highestOccurrence: string;
  lowestOccurence: string;
  phrase: string;
  vowelsFindedList: string[];
};

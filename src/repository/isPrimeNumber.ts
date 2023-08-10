const primeNumberList = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

export function isPrimeNumber(primeNumber: number): {
  isPrime: boolean;
  message: string;
  primeNumberList: number[];
} {
  let isPrime: boolean = true;

  if (primeNumber === 1) {
    return {
      isPrime: false,
      message: `The number 1 is not a prime number.`,
      primeNumberList,
    };
  }

  for (let i = 2; i <= primeNumber; i++) {
    
    if (primeNumber % i == 0) {
      isPrime = false;
      break;
    }
  }

  return {
    isPrime,
    message: `The number ${primeNumber} ${
      isPrime ? "is" : "is not"
    } a prime number.`,
    primeNumberList,
  };
}

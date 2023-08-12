import { VowelCounterResponse } from "../types";

export function counter(phrase: string): VowelCounterResponse {
  let vowelsResult: { max: string; min: string } = { min: "", max: "" };

  let vowelsFindedList: string[] = Array.from(phrase.toLowerCase()).filter(
    (letter) => "aeiou".includes(letter)
  );
  let vowelsQuantity: number = vowelsFindedList.length;

  if (vowelsQuantity > 0) {
    vowelsResult.max = vowelsFindedList.reduce((previous, current, i, arr) =>
      arr.filter((item) => item === previous).length >
      arr.filter((item) => item === current).length
        ? previous
        : current
    );
    vowelsResult.min = vowelsFindedList.reduce((previous, current, _, arr) =>
      arr.filter((item) => item === previous).length <
      arr.filter((item) => item === current).length
        ? previous
        : current
    );
  }

  return {
    highestOccurrence: vowelsResult.max,
    lowestOccurence: vowelsResult.min,
    phrase,
    vowelsList: ["a", "e", "i", "o", "u"],
    vowelsQuantity,
    vowelsFindedList,
  };
}

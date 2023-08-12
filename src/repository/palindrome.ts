import { PalindromeResponse } from "../types";

export function palindromeVerification(text: string): PalindromeResponse {
  let lowRegStr = text.toLowerCase().replace(/[\W_]/g, "");
  let reverseStr = lowRegStr.split("").reverse().join("");
  let isPalindrome = reverseStr === lowRegStr;

  return {
    isPalindrome,
    inserted: lowRegStr.charAt(0).toUpperCase() + lowRegStr.slice(1),
    reverse: reverseStr.charAt(0).toUpperCase() + reverseStr.slice(1),
  };
}

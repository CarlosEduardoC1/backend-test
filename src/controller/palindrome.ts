import { FastifyRequest } from "fastify";
import { palindromeVerification } from "../repository/palindrome";

const charValidation = /\W|_/g;
const numberValidation = /[^d]/g;

export const palindromeController = ({
  params: { palindromeString },
}: FastifyRequest<{ Params: { palindromeString: string } }>) => {
  if (Number(palindromeString)) {
    return new Error("A palindrome cannot be a number");
  } else if (charValidation.test(palindromeString) === true) {
    return new Error("Special characters and spaces are not allowed");
  } else if (numberValidation.test(palindromeString) === true) {
    return new Error("Numbers are not allowed in palindrome's word");
  } else return palindromeVerification(palindromeString);
};

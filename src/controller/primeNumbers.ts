import { FastifyRequest } from "fastify";
import { isPrimeNumber } from "../repository/isPrimeNumber";

export const primeNumbersController = async ({
  params: { primeNumber },
}: FastifyRequest<{ Params: { primeNumber: number } }>) => {
  if (!Number(primeNumber)) return new Error("Invalid number");
  if (primeNumber < 0)
    return new Error(
      "Prime numbers can not be negative. Please, send a positive number."
    );

  return isPrimeNumber(Number(primeNumber));
};

import { FastifyRequest } from "fastify";
import { counter } from "../repository/counter";

export const voewlCounterController = (
  request: FastifyRequest<{ Body: { phrase: string } }>
) => {
  const phrase: string = request.body.phrase;

  if (typeof phrase === "string") {
    return counter(phrase);
  }

  return new Error("Phrases must be a string.");
};

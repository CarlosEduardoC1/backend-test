import { FastifyRequest } from "fastify";
import { mediaCalculator } from "../repository/media";

export const mediaCalculatorController = (
  request: FastifyRequest<{
    Body: { notes: { [key: string]: number } | number[] };
  }>
) => {
  let response;
  let toCalculate: number[] = [];

  if (Array.isArray(request.body.notes)) {
    console.log("HERE");
    return (
      request.body.notes.length === 0 &&
      new Error("You have to send student notes.")
    );
  }

  const notes = Object.keys(request.body.notes);

  if (notes.length < 3) return new Error("You need to send 3 notes");

  for (let note in request.body.notes) {
    if (typeof request.body.notes[note] !== "number") {
      response = new Error(
        `Note of ${
          request.body.notes[note]
        } must be a number. Received: ${typeof request.body.notes[note]}`
      );
    } else toCalculate.push(request.body.notes[note]);
  }

  response = mediaCalculator(toCalculate);

  return response;
};

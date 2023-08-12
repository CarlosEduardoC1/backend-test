import { FastifyRequest } from "fastify";
import { factorialize } from "../repository/factorialize";

export const factorializeController = ({
  params: { factorNumber },
}: FastifyRequest<{ Params: { factorNumber: string } }>) => {
  const factorAsNumber: number = Number(factorNumber);

  if (isNaN(factorAsNumber)) return new Error("Invalid number");

  return factorialize(factorAsNumber);
};

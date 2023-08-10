import { FastifyRequest } from "fastify";
import { z } from "zod";
import { calculator } from "../repository/calculator";

export const simpleCalculationController = async (request: FastifyRequest) => {
  const calculationBody = z.object({
    operation: z.string(),
  });

  const { operation } = calculationBody.parse(request.body);

  return calculator(operation);
};

import { FastifyInstance } from "fastify";
import { simpleCalculationController } from "./controller/simpleCalculation";
import { primeNumbersController } from "./controller/primeNumbers";

export async function appRoutes(app: FastifyInstance) {
  app.post("/simple-calculation", simpleCalculationController);
  app.get("/prime-numbers/:primeNumber", primeNumbersController);
}

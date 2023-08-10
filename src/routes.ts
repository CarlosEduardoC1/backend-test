import { FastifyInstance } from "fastify";
import { simpleCalculationController } from "./controller/simpleCalculation";
import { primeNumbersController } from "./controller/primeNumbers";
import { factorializeController } from "./controller/factorialNumber";

export async function appRoutes(app: FastifyInstance) {
  app.post("/simple-calculation", simpleCalculationController);
  app.get("/prime-numbers/:primeNumber", primeNumbersController);
  app.get("/factorialize/:factorNumber", factorializeController);
}

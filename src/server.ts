import fastify from "fastify";
import cors from '@fastify/cors';
import { appRoutes } from "./routes";

const app = fastify();

app.register(cors);
app.register(appRoutes, {prefix: "/api/v1"});

app.listen({
    port: 3333
}).then(() => { console.log("Server is running") });
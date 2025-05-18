import { Elysia } from "elysia";
import routes from "./routes";

const app = new Elysia();
app
    .group("/api", (app) => app.use(routes))
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

import { serve } from "@hono/node-server";
import app from "./app";
import { env } from "../config/env";

export function main() {
  serve(
    {
      fetch: app.fetch,
      port: Number(env.PORT),
    },
    (info) => {
      console.log(`Server is running on http://localhost:${info.port}`);
    },
  );
}

import type { Context } from "hono";
import type { HandlerResponse } from "hono/types";

export class HealthController {
  constructor() {}

  getHealth(c: Context): HandlerResponse<string> {
    return c.text("OK");
  }
}

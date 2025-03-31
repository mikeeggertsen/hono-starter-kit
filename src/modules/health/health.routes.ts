import { Hono } from "hono";
import { HealthController } from "./health.controller";

export class HealthRoutes {
  private routes: Hono;

  constructor(private readonly healthController: HealthController) {
    this.routes = new Hono();
    this.register();
  }

  private register() {
    this.routes.get("", this.healthController.getHealth);
  }

  getRoutes(): Hono {
    return this.routes;
  }
}

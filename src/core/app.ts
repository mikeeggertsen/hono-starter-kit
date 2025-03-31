import { ErrorHandler } from "../common/handlers/error-handler";
import { Hono } from "hono";
import { container } from "./di-container";
import { HealthInjectables } from "../modules/health/constants/injectables";
import type { HealthRoutes } from "../modules/health/health.routes";

const app = new Hono();

new ErrorHandler(app).register();

const healthRoutes: HealthRoutes = container.resolve<HealthRoutes>(
  HealthInjectables.HealthRoutes,
);

app.route("/health", healthRoutes.getRoutes());

export default app;

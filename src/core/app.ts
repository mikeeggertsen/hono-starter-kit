import { ErrorHandler } from "@common/handlers/error-handler";
import { Hono } from "hono";
import { container } from "./di-container";
import { HealthRoutes } from "modules/health/health.routes";
import { HealthInjectables } from "modules/health/constants/injectables";

const app = new Hono();

new ErrorHandler(app).register();

const healthRoutes: HealthRoutes = container.resolve<HealthRoutes>(
  HealthInjectables.HealthRoutes,
);

app.route("/health", healthRoutes.getRoutes());

export default app;

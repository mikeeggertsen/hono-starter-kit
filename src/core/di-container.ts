import { asClass, createContainer, InjectionMode } from "awilix";
import { HealthInjectables } from "../modules/health/constants/injectables";
import { HealthController } from "../modules/health/health.controller";
import { HealthRoutes } from "../modules/health/health.routes";

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

container.register({
  [HealthInjectables.HealthRoutes]: asClass(HealthRoutes).singleton(),
  [HealthInjectables.HealthController]: asClass(HealthController).singleton(),
});

export { container };

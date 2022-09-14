import * as routes from "../routes/mod.ts";
import { MiddlewareApp } from "../middlewareLib/mod.ts";

export const router = MiddlewareApp.init();

router.config({
  notFoundHandler: routes.notFoundRoute,
});

router.options("/*", routes.optionsRoute); // CORS
router.get("/favicon.ico", routes.favIconRoute);
router.get("/", routes.listRoutes);

//test

router.get(
  "/test",
  routes.testRoute,
);

import * as routes from "../routes/mod.ts";
import { MiddlewareApp } from "../middlewareLib/mod.ts";

export const router = MiddlewareApp.init();

router.config({
  notFoundHandler: routes.notFoundRoute,
});

router.options("/*", routes.optionsRoute); // CORS
router.get("/favicon.ico", routes.favIconRoute);
router.get("/", routes.listRoutes);

//api

router.post("/signin", routes.signInRoute);
router.post("/signup", routes.signUpRoute);

//test

router.get(
  "/test",
  routes.testRoute,
);

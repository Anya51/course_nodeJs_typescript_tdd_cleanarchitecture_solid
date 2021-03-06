import { Router } from "express";
import { makeSignUpController } from "../factories/signup";
import { adaptRoute } from "../adapters/express-routes-adapter";

export function SignUpRoutes(router: Router): void {
  router.post("/signup", adaptRoute(makeSignUpController()));
}

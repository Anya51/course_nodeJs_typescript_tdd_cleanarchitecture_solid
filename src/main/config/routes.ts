import { Express, Router } from "express";
import { SignUpRoutes } from "../routes/index";

export default (app: Express): void => {
  const router = Router();
  SignUpRoutes(router);
  app.use("/api", router);
};

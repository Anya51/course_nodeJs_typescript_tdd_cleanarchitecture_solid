import { Router } from "express";

export function SignUpRoutes(router: Router): void {
  router.post("/signup", (req, res) => {
    res.json({ ok: "ok" });
  });
}

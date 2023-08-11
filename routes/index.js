import express from "express";
import athletesRouter from "./athletes.route.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/athletes", athletesRouter)

export default router;

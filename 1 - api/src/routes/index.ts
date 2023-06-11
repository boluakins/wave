import { Router } from "express";
import loan from "./loan";

const router = Router();

router.use("/loans", loan);

export default router;

import { Router } from "express";
import * as ctl from "./../controllers/wines.controller.js";

const router = Router();

router.get("/wines", ctl.getAllWines);
router.get("/wines/:id", ctl.getWineById);
router.post("/wines", ctl.createWine);
router.put("/wines/:id", ctl.updateWine);
router.delete("/wines/:id", ctl.deleteWine)

export default router;
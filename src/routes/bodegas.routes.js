import { Router } from "express";
import { methodsHTTP as bodegasController } from "../controllers/bodegas.controllers.js";
const router = Router();

router.get('/', bodegasController.getBodegas);

export default router;
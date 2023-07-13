import { Router } from "express";
import { methodsBodegas as bodegasController } from "../controladores/bodegas.controllers.js";
const router = Router();

router.get('/', bodegasController.getBodegas);
router.post('/', bodegasController.addBodega);

export default router;
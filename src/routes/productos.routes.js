import { Router } from "express";
import { methodsProductos } from "../controllers/productos.controllers.js";
const router = Router();

router.get('/', methodsProductos.getProductos);

export default router;
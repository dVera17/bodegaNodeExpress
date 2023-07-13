import { Router } from "express";
import { methodsProductos } from "../controladores/productos.controllers.js";
const router = Router();

router.get('/', methodsProductos.getProductos);
router.get('/total', methodsProductos.getTotalProductos);
router.post('/', methodsProductos.addProducto);

export default router;
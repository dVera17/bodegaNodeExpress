import { Router } from "express";
import { methodsInventarios } from "../controladores/inventarios.controllers.js";

const router = Router();

router.post('/', methodsInventarios.addInventarios);

export default router;
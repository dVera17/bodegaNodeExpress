import express from "express";
import bodegasRouter from "./routes/bodegas.routes.js";

const app = express();
app.set('port', 5010);
app.use(express.json());

app.use('/bodegas', bodegasRouter)

export default app;
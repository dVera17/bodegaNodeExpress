import express from "express";
const app = express();
app.set('port', 5010);
app.use(express.json());

export default app;
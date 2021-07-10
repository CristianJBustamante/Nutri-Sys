import express from "express";
import config from "./config";
import pacienteRoutes from "./routes/paciente.routes";
import mutualRoutes from "./routes/mutual.routes";

const app = express()
let port;

// settings
app.set('port',config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(pacienteRoutes)
app.use(mutualRoutes)
export default app


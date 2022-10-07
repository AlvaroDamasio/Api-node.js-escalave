//Este modulo é responsavel por configurar o express com as configurações de 
//rotas e retorno em json

import express from "express";
import { router } from "./routes";

const app = express()

app.use(express.json())
app.use(router)

export {app}
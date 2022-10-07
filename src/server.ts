//Este modulo é responsavel por instanciar o ./app com uma instancia do express ja configurado

import { app } from "./app"

app.listen(3000, ()=>{
    console.log('servidor rodando na porta 3000')
})
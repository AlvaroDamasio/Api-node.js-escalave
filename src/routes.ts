//from server express
import { Router } from "express";
//repositories
import { inMemory } from "./repositories/implementations/repository";
//controllers
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { DeleteController } from "./useCases/deleteUser/DeleteUserController";
import { ListUserController } from "./useCases/listUser/ListUserController";
import { UpdateUsercontroller } from "./useCases/updateUser/updateUserController";

const router = Router()

//esta rota é responsavel por criar um usuario e salvar no repositorio
router.post("/create", (req, res)=>{
    const constroller = new CreateUserController(inMemory)
    constroller.handler(req, res)  
    return 

})
//esta rota é responsavel por retornar todos os usuarios criados
router.get('/', (req,res)=>{
    const constroller = new ListUserController(inMemory)
    return constroller.handler(req, res)
})
//esta rota é responsavel por deletar o usuarios identificado pelo email do repositorio
router.post('/delete', (req,res)=>{
    const constroller = new DeleteController(inMemory)
    return constroller.handler(req, res)
})
router.post('/update', (req,res)=>{
    const controller = new UpdateUsercontroller(inMemory)
    return controller.handler(req, res)
})

export{router}
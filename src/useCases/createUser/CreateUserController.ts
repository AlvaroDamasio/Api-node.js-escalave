import { Usuario } from "../../entities/Usuario";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";
import { IUserRepository } from "../../repositories/IUserRepository";

export class CreateUserController {
    private _repository:IUserRepository

    constructor(repository){
        this._repository = repository
    }

   async handler(req, res:Response){
   
        const {name, email, password} = req.body
        const usecase = new CreateUserUseCase(this._repository)

        try{
            const status = await usecase.execute(name, email, password) 
            
            return res.status(status).send()
        }

        catch{
            res.status(400).json({
                "message": 'erro'
            })
        }
   }

}
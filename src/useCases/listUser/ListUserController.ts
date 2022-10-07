import { IUserRepository } from "../../repositories/IUserRepository"
import { ListUserUseCase } from "./ListUserUseCase"

export class ListUserController {


    private _repository:IUserRepository

    constructor(repository){
        this._repository = repository   
    }
    
    async handler(req, res){
        const usecase = new ListUserUseCase(this._repository)
        const data = await usecase.execute()

       
        return res.send(data)
    }
}
import { IUserRepository } from "../../repositories/IUserRepository"
import { DeleteUserUseCase } from "./DeleteUserUseCase"

export class DeleteController{

    private _repository:IUserRepository

    constructor(repository){
        this._repository = repository
        
    }
    async handler(req, res){
        const {email} = req.body
        const useCase = new DeleteUserUseCase(this._repository)
        const status = await useCase.execute(email)
        
        return res.status(status).send()
    }
}
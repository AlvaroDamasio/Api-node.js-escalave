import { IUserRepository } from "../../repositories/IUserRepository";

export class DeleteUserUseCase{

    private _repository:IUserRepository

    constructor(repository: IUserRepository){
        this._repository = repository
    }

    async execute(email){
        const userExists = await this._repository.findByEmail(email)
        
        if(!userExists){
            const status = 403
            return status
        }
        else{
            await this._repository.delete(email)
            const status = 200
            
            return status
        }

        
    }
}
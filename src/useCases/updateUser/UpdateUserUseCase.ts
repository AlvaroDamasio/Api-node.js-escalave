import { Usuario } from "../../entities/Usuario";
import { IUserRepository } from "../../repositories/IUserRepository";

export class UpdateUserUseCase{
    private _repository:IUserRepository

    constructor(repository:IUserRepository){
        this._repository = repository
    }

    async execute(email, newUsuario:Usuario){
        const userExists = await this._repository.findByEmail(email)

        const newEmail = newUsuario.email
        const newEmailExists = await this._repository.findByEmail(newEmail)

        if(userExists && !newEmailExists){
            this._repository.update(email, newUsuario)
            const status = 201
            return status
        }
        else{ 
            const status = 300
            return status
        }
        
    }
}
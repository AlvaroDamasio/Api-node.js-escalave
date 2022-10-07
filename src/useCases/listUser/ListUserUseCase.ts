import { IUserRepository } from "../../repositories/IUserRepository";

export class ListUserUseCase{

    private _repository:IUserRepository

    constructor(repository:IUserRepository){
        this._repository = repository
    }

    async execute(){
        const data = await this._repository.read()
        
        return data
    }
}
import { IUserRepository } from "../../repositories/IUserRepository"
import { UpdateUserUseCase } from "./UpdateUserUseCase"

export class UpdateUsercontroller{
    private _repository: IUserRepository

    constructor(repository){
        this._repository= repository
    }
    async handler(req, res){
        const {email, updateUser} = req.body
        const userCase = new UpdateUserUseCase(this._repository)
        const status = await userCase.execute(email, updateUser)
        return res.status(status).send()
    }
}
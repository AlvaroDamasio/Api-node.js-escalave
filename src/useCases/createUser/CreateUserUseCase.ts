import { Usuario } from "../../entities/Usuario";
import { IUserRepository } from "../../repositories/IUserRepository";

export class CreateUserUseCase{

    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository, ){
        this.userRepository = userRepository
        
    }

    async execute(nome, email, password){
        const userExists = await this.userRepository.findByEmail(email)

        if (userExists){
            const status = 300
            return status
        }
        else{
            const user = new Usuario(nome, email, password)

            await this.userRepository.save(user)
            const status = 201
            return status
        }

        
    }
}
import { Usuario } from "../entities/Usuario";

export interface IUserRepository{

    findByEmail(email:string)

    read()

    delete(email)

    save(user: Usuario)

    update(email: string, newUser: Usuario)
    
}
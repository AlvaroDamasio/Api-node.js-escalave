import { Usuario } from "../../entities/Usuario";
import { IUserRepository } from "../IUserRepository";

export class InMemoryUserRepository implements IUserRepository{

    private user = []

    
    async findByEmail(email: string) {
    const user = this.user.find(user => user.email == email) 
    return user
    }

    async save(usuario:Usuario){
        const db = this.user
        db.push(usuario)
        this.user = db 
        return this.user
    }

    async read() {
      return this.user
    }

    async delete(email: string) {
      const data = await  this.findByEmail(email)
      const index = await this.user.indexOf(data)
      this.user.splice(index, 1)
      return 
    }
    async update(email: string, newUser:Usuario) {
      const user = this.user.find(user => user.email == email)
      const index = this.user.indexOf(user)
      this.user.splice(index, 1)
      this.user[index] = newUser
      return
    }

}
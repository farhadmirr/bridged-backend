import { Injectable } from "@nestjs/common";
import { validate } from "class-validator";
import { UserCreateDTO } from "src/application/dtos/user";
import { UserResponseDTO } from "src/application/dtos/user/user-response.dto";
import { UserRepository } from "src/infrastructure/repositories";
import { User } from "../entities";

@Injectable()

export class UserServices{
    constructor(readonly userRepository:UserRepository){}

    async findByEmail({email}:any):Promise<User[]>{
        const result : User[] = await this.userRepository.findByEmail({email});
        return result
    }

    async insertUser(userCreateDTO:UserCreateDTO):Promise<UserCreateDTO>{
        const errors = await validate(userCreateDTO)
        if (errors.length){
            throw errors
        }
        const exist = await this.userRepository.findByEmail({email:userCreateDTO.email});
        if (exist.length) {
                throw 'User is already exist in the databse'
        }
        const newUser = await this.userRepository.insertUser(userCreateDTO);
        return newUser
    }

}
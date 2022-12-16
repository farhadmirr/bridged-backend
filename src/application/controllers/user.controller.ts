import { UserServices } from "src/domain/services/user.services";
import { AuthService } from "src/domain/services";
import { Controller, Get, Post } from "@nestjs/common";
import { UserCreateDTO } from "../dtos/user";
import { Body } from "@nestjs/common";
import { UserRepository } from "src/infrastructure/repositories";
import { UserResponseDTO } from "../dtos/user/user-response.dto";
@Controller("/user")
export class UserController{
    constructor(
        private userServices: UserServices,
        private authServices:AuthService
    ) {}

    @Post('/login')
    async login(@Body() userCreateDTO: UserCreateDTO): Promise<UserResponseDTO> {
        const result = await this.authServices.login(userCreateDTO);
        return result;
    }

    @Post('/sign-up')
    async signUp(@Body() userCreateDTO:UserCreateDTO) : Promise<UserCreateDTO>{
        const result = await this.userServices.insertUser(userCreateDTO)
        return result
    }
}
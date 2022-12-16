import { Injectable } from "@nestjs/common";
import { UserServices } from "./user.services";
import { JwtService } from "@nestjs/jwt";
import { UserCreateDTO } from "src/application/dtos/user";
import { sign } from "crypto";
import { UserResponseDTO } from "src/application/dtos/user/user-response.dto";

@Injectable()

export class AuthService {
    constructor(
        private userService :UserServices,
        private jwtService :JwtService
    ){}

    async validateUser(email:string ,pass:string): Promise<any> {
        const user = await this.userService.findByEmail(email);
        if (user.length) {
          if (user[0].password==pass)
          return true;
        }
        return false;
      }
    
      async login(userCreateDTO:UserCreateDTO) :Promise<UserResponseDTO>{
        const payload = {email:userCreateDTO.email , password:userCreateDTO.password}
        let result = new UserResponseDTO
        if (this.validateUser(userCreateDTO.email,userCreateDTO.password)){
            result.status="ok"
            result.token=this.jwtService.sign(payload)
            return result
        }else{
            result.status="fail"
            result.token=""
            return result
        }
      }
}
import {IsDefined, IsJWT, IsStrongPassword, IsUrl, MaxLength } from 'class-validator';


export class UserResponseDTO{
    @IsDefined()
    @MaxLength(30)
     status:string;
    @MaxLength(32)
    @IsDefined()
    @IsJWT()
    token :string;
    constructor({status,token}:any = {}){
        this.status = token
        this.status = status
    }
}
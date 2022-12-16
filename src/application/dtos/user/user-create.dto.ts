import { IsDate, IsDefined, IsOptional, IsStrongPassword, IsUrl, MaxLength } from 'class-validator';


export class UserCreateDTO{
    @IsDefined()
    @MaxLength(30)
    email :string;
    @MaxLength(32)
    @IsDefined()
    @IsStrongPassword()
    password :string;
    constructor({email,password}:any = {}){
        this.email = email
        this.password = password
    }
}
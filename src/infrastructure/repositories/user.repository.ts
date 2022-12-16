import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User,UserDocument } from "src/domain/entities";
import { UserCreateDTO } from "src/application/dtos/user";


@Injectable()
export class UserRepository{
    constructor(private readonly userModel:Model<UserDocument>){};

    async findByEmail({email}:any) : Promise<User[]> {
        const results : User[] = await this.userModel.find({ email }).exec();
        return results;
    }

    async insertUser(userCreateDTO : UserCreateDTO) : Promise<User> {
        const newUser = new this.userModel(userCreateDTO)
        return await newUser.save();
    }
}
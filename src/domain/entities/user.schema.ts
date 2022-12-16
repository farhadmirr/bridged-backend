import * as mongoose from "mongoose"
import { Document } from "mongoose"

export interface User{
    _id?:string;
    email:string;
    password:string;
    fullname:string;
    registeredDate:Date;
}

export type UserDocument = User & Document;

export const UserSchema: any = new mongoose.Schema(
    {
        email:String,
        password:String,
        fullname:String,
        registeredDate:Date,

    },
    {
        timestamps:true,
        _id:true,
    }
);
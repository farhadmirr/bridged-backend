import * as mongoose from "mongoose"
import { Document } from "mongoose"

export interface Post{
    _id?:string;
    title:string;
    body:string;
    createdDate:Date;
    createdBy:string;
}

export type PostDocument = Post & Document;

export const PostSchema: any = new mongoose.Schema(
    {
        title:String,
        body:String,
        createdDate:Date,
        createdBy:String,

    },
    {
        timestamps:true,
        _id:true,
    }
);

PostSchema.index({title:1},{unique:true})
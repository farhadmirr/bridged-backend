import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import {Post,PostDocument} from "src/domain/entities"
import { PostCreateDTO } from "src/application/dtos/post";


@Injectable()
export class PostsRepository{
    constructor(private readonly postModel:Model<PostDocument>){};

    async findById({_id}:any) : Promise<Post[]> {
        const results : Post[] = await this.postModel.find({ _id }).exec();
        return results;
    }

    async findAll() : Promise<Post[]> {
        const result : Post[] = await this.postModel.find().exec()
        return result;
    }

    async findByAuthor({_id}:any) : Promise<Post[]>{
        const result : Post[] = await this.postModel.find({_id}).exec()
        return result;
    }

    async deleteById({_id}:any) : Promise<Post>{
            const result : Post = await this.postModel.findOneAndDelete({_id:_id}).exec()
            return result
    }

    async updatePost(postCreateDTO:PostCreateDTO) : Promise<PostDocument | null>{
        return await this.postModel.findOneAndUpdate({title:postCreateDTO.title , body:postCreateDTO.body},postCreateDTO);
    }

    async insertNewPost(postCreateDTO : PostCreateDTO) : Promise<Post>{
        const newPost = new this.postModel(postCreateDTO)
        return await newPost.save();
    }
}
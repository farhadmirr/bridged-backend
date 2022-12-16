import { Injectable } from "@nestjs/common";
import { validate } from "class-validator";
import { PostCreateDTO } from "src/application/dtos/post";
import { PostsRepository } from "src/infrastructure/repositories";
import { Post, PostDocument, User } from "../entities";

@Injectable()

export class PostServces{
    constructor(readonly postRepositore:PostsRepository){}

    async findAll():Promise<Post[]>{
        const result : Post[] = await this.postRepositore.findAll();
        return result
    }

    async findByID({_id}:any):Promise<Post[]>{
        const result : Post[] = await this.postRepositore.findById({_id});
        return result
    }

    async findByAuthor({_id}:any) :Promise<Post[]>{
        const result : Post[] = await this.postRepositore.findByAuthor({_id})
        return result
    }

    async insertNewPost(postCreateDTO:PostCreateDTO) : Promise<Post>{
        const errors = await validate(postCreateDTO);

        if (errors.length){
            throw errors
        }
        const result :Post = await this.postRepositore.insertNewPost(postCreateDTO)
        return result
    }

    async updatePost(postCreateDTO:PostCreateDTO) :Promise<PostDocument>{
            const result : PostDocument = await this.postRepositore.updatePost(postCreateDTO)
            return result
    }

    async deletePost({_id}:any) :Promise<Post>{
            const result :Post = await this.postRepositore.deleteById(_id)
            return result
    }


}
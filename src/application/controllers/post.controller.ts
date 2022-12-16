import { Controller, Delete } from "@nestjs/common";
import { PostServces } from "src/domain/services";
import { Get,Post,Put } from "@nestjs/common";
import { PostCreateDTO } from "../dtos/post";
import { Body } from "@nestjs/common";
@Controller("/post")
export class PostController{
    constructor(private postServices: PostServces) {}

    @Get()
    async findAll(): Promise<PostCreateDTO[]> {
      const posts = await this.postServices.findAll();
      const dtos: PostCreateDTO[] = posts.map(post => new PostCreateDTO(post));
      return dtos;
    }

    @Post()
    async create(@Body() postCreateDTO: PostCreateDTO): Promise<PostCreateDTO> {
      const dto = new PostCreateDTO(postCreateDTO);
      const post = await this.postServices.insertNewPost(dto);
      return new PostCreateDTO(post);
    }

    @Put()
    async update(@Body() postCreateDTO: PostCreateDTO): Promise<PostCreateDTO> {
      const dto = new PostCreateDTO(postCreateDTO);
      const movie = await this.postServices.updatePost(dto);
      return new PostCreateDTO(movie);
    }

    @Delete()
    async delete(@Body() postCreateDTO: PostCreateDTO): Promise<PostCreateDTO> {
        const dto = new PostCreateDTO(postCreateDTO);
        const post = await this.postServices.deletePost(dto);
        return new PostCreateDTO(post);
    }
}
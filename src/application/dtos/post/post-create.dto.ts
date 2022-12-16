import { IsDate, IsDefined, IsOptional, IsUrl, MaxLength } from 'class-validator';


export class PostCreateDTO{
    @IsDefined()
    @MaxLength(30)
    title :string;
    @MaxLength(1000)
    @IsDefined()
    body :string;
    @IsDate()
    @IsDefined()
    createdDate:Date;
    @IsDefined()
    createdBy:string;


    constructor({title , body , createdDate , createdBy}:any = {}){
        this.title = title;
        this.body = body;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
    }
}
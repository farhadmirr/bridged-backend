import { Module } from '@nestjs/common';
import { PostServces } from '../services';
import { PostController } from '../../application/controllers';
import { OrmModule } from '../../infrastructure/database/orm';
import { UserSchema , PostSchema } from '../entities';
import { UserRepository,PostsRepository } from '../../infrastructure/repositories';

@Module({
  imports: [OrmModule.forFeature([{ name: "User", schema: UserSchema }])],
  controllers: [PostController],
  providers: [PostServces, PostsRepository],
  exports: [PostServces, PostsRepository],
})
export class PostModule {}
import { Module } from '@nestjs/common';
import { UserServices } from '../services/user.services';
import { UserController } from '../../application/controllers';
import { OrmModule } from '../../infrastructure/database/orm';
import { UserSchema , PostSchema } from '../entities';
import { UserRepository,PostsRepository } from '../../infrastructure/repositories';

@Module({
  imports: [OrmModule.forFeature([{ name: "User", schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserServices, UserRepository],
  exports: [UserServices, UserRepository],
})
export class UserModule {}
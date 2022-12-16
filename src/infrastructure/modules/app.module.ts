

import { Module } from '@nestjs/common';
import { OrmModule } from '../database/orm';
import { UserModule } from 'src/domain/modules/user.module';
import { PostModule } from 'src/domain/modules/posts.module';

@Module({
  imports: [
    OrmModule.forRootAsync({
      useFactory: async () => {
        return {
            host: process.env.MONGO_HOST,
            options: {
                dbName: process.env.DB_NAME,
                auth: {
                    user: process.env.MONGO_USER,
                    password: process.env.MONGO_PASS
                }
            }
        }
      },
      inject: [],
    }),
    UserModule,
    PostModule
  ],
  controllers: [],
})
export class AppModule {}
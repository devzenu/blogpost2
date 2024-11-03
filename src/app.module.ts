import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    MongooseModule.forRoot(
      //'mongodb+srv://dev_zenu:test123@cluster0.5tekw0i.mongodb.net/',
      'mongodb://dev_zenu:test123@ac-tkslpzq-shard-00-00.5tekw0i.mongodb.net:27017,ac-tkslpzq-shard-00-01.5tekw0i.mongodb.net:27017,ac-tkslpzq-shard-00-02.5tekw0i.mongodb.net:27017/?ssl=true&replicaSet=atlas-n0nhzl-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0',
      { dbName: 'nestjs-blog' },
    ),
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

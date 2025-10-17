import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Chi@261189',
      database: 'QuizVerse',
      autoLoadEntities: true,
      synchronize: true, // chỉ dùng khi dev
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

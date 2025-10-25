import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from '../entities/quiz.entity'; // Import entity
import { Category } from '../entities/category.entity'; // Import entity
import { QuizCategory } from '../entities/quiz-category.entity'; // Import entity
import { User } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Category, QuizCategory, User])],
  controllers: [QuizzesController],
  providers: [QuizzesService],
})
export class QuizzesModule {}

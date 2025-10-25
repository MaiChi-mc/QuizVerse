import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Quiz } from './quiz.entity';
import { Category } from './category.entity';

@Entity('Quiz_Categories')
export class QuizCategory {
  @PrimaryColumn({ type: 'int' })
  quiz_id: number;

  @PrimaryColumn({ type: 'int' })
  category_id: number;

  // Quan hệ: Nhiều QuizCategory thuộc về 1 Quiz
  @ManyToOne(() => Quiz, (quiz) => quiz.Quiz_Categories, {
    onDelete: 'CASCADE', 
  })
  @JoinColumn({ name: 'quiz_id' }) // Tên cột FK
  quiz: Quiz;

  // Quan hệ: Nhiều QuizCategory thuộc về 1 Category
  @ManyToOne(() => Category, (category) => category.Quiz_Categories, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' }) // Tên cột FK
  category: Category;
}
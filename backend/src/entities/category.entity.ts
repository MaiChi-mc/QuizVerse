import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { QuizCategory } from './quiz-category.entity';

@Entity('Categories')
export class Category {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({ length: 100 })
  name: string;

  @Column('text')
  description: string;

  @Column({ name: 'img_url', length: 2048 , nullable: true })
  img_url: string;

  // 1 Category có nhiều "QuizCategory"
  @OneToMany(() => QuizCategory, (quizCategory) => quizCategory.category)
  Quiz_Categories: QuizCategory[];
}
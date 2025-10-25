import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { QuizCategory } from './quiz-category.entity';
import { User } from './user.entity';

@Entity('Quizzes') // Tên bảng trong CSDL
export class Quiz {
  @PrimaryGeneratedColumn()
  quiz_id: number;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column({ name: 'img_url', length: 2048 , nullable: true })
  img_url: string;

  @Column({ name: 'view_count', type: 'int', default: 0 }) 
  view_count: number; 

  // Quan hệ với User (người tạo quiz)
  @ManyToOne(() => User, (user) => user.Quizzes, {
    onDelete: 'SET NULL', 
    nullable: true,
  })
  @JoinColumn({ name: 'created_by_user_id' }) // Chỉ rõ cột FK là gì
  User: User;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  // Định nghĩa quan hệ: 1 Quiz có nhiều "QuizCategory"
  @OneToMany(() => QuizCategory, (quizCategory) => quizCategory.quiz)
  Quiz_Categories: QuizCategory[];
}
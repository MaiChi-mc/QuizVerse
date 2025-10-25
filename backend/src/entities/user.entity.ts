import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Quiz } from './quiz.entity';

@Entity('Users') // Tên bảng trong CSDL
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 , unique: true })
  email: string;

  @Column({ length: 255, name: 'password_hash' })
  password_hash: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  // Định nghĩa quan hệ: 1 User có nhiều "Quiz"
  @OneToMany(() => Quiz, (quiz) => quiz.User)
  Quizzes: Quiz[];
}
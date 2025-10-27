import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizzesService {
  // Tiêm (inject) Repository của Quiz vào service
  constructor(
    @InjectRepository(Quiz)
    private quizzesRepository: Repository<Quiz>,
  ) {}

  // Logic để fetch list of quizzes
  async findLatest() {
    // 1. Query CSDL dùng TypeORM Repository
    const quizzesFromDb = await this.quizzesRepository.find({
      order: {
        created_at: 'DESC', // Sắp xếp theo ngày tạo mới nhất
      },
      // Đây là phần "JOIN" của TypeORM
      relations: {
        Quiz_Categories: {
          category: true, // Lấy "Quiz_Categories" VÀ "Category" lồng bên trong
        },
        User: true, // Lấy thông tin User (người tạo quiz)
      },
    });
    // 2. Gọi helpter để biến đổi dữ liệu
    return this._transformQuizzesForFrontend(quizzesFromDb);
  }

  // Logic để lấy danh sách các quiz dựa trên danh mục
  async findByCategoryId(categoryId: number) {
    // 1. Query CSDL dùng TypeORM Repository
    const quizzesFromDb = await this.quizzesRepository.find({
      where: {
        Quiz_Categories: {
          category: {
            category_id: categoryId,
          },
        },
      },
      order: {
        created_at: 'DESC',
      },
      relations: {
        Quiz_Categories: {
          category: true,
        },
        User: true,
      },
    });
    return this._transformQuizzesForFrontend(quizzesFromDb);
  }

  private _transformQuizzesForFrontend(quizzesFromDb: Quiz[]) {
    // Biến đổi (Transform) dữ liệu từ CSDL thành định dạng frontend cần
    const quizzesForFrontend = quizzesFromDb.map((quiz) => {
      // Biến đổi mảng lồng nhau thành mảng string đơn giản
      const tags = quiz.Quiz_Categories.map((qc) => qc.category.name);
      const creatorName = quiz.User ? quiz.User.username : 'Unknown User';

      return {
        id: quiz.quiz_id,
        title: quiz.title,
        description: quiz.description,
        imageUrl: quiz.img_url,
        views: quiz.view_count,
        creatorName: creatorName,
        tags: tags,
        href: `/quiz/${quiz.quiz_id}`,
      };
    });

    // Trả về dữ liệu đã biến đổi
    return quizzesForFrontend;
  }
}

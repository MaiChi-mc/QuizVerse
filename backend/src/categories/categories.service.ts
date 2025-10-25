import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  // Tiêm (inject) Repository của Quiz vào service
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  // Logic để fetch list of quizzes
  async findAllAlphabetically() {
    // 1. Query CSDL dùng TypeORM Repository
    const categoriesFromDb = await this.categoriesRepository.find({
      order: {
        name: 'ASC', // Sắp xếp theo ngày tạo mới nhất
      },
    });
    // 2. Biến đổi (Transform) dữ liệu từ CSDL thành định dạng frontend cần
    const categoriesForFrontend = categoriesFromDb.map((category) => {
      return {
        id: category.category_id,
        name: category.name,
        description: category.description,
        imageUrl: category.img_url,
        href: `/category/${category.category_id}`,
      };
    });

    return categoriesForFrontend;
  }
}

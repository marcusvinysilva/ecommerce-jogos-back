import { Injectable, NotFoundException } from '@nestjs/common';
import CreateCategoryDto from './dto/createCategory.dto';
import Category from './category.entity';
import UpdateCategoryDto from './dto/updateCategory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export default class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  getAllCategories(): Promise<Category[]> {
    return this.categoriesRepository.find({ relations: ['games'] });
  }

  async getCategoryById(id: string): Promise<Category> {
    const category = await this.categoriesRepository.findOne(id, {
      select: ['games'],
    });
    if (category) {
      return category;
    }
    throw new NotFoundException('Categoria não encontrada!');
  }

  async createCategory(category: CreateCategoryDto) {
    const newCategory = await this.categoriesRepository.create(category);
    await this.categoriesRepository.save(newCategory);
    return newCategory;
  }

  async updateCategory(
    id: number,
    category: UpdateCategoryDto,
  ): Promise<Category> {
    await this.categoriesRepository.update(id, category);
    const updatedCategory = await this.categoriesRepository.findOne(id, {
      relations: ['games'],
    });
    if (updatedCategory) {
      return updatedCategory;
    }
    throw new CategoryNotFoundException(id);
  }

  async deleteCategoryById(id: number): Promise<void> {
    return this.deleteCategory(id);
  }

  async deleteCategory(id: number): Promise<void> {
    const deleteResponse = await this.categoriesRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new CategoryNotFoundException(id);
    }
  }
}
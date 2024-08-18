// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Categories } from 'src/entities/categories.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class CategoriesReposoitory {
//   save(newCategory: void) {
//     throw new Error('Method not implemented.');
//   }
//   create(arg0: { name: string }) {
//     throw new Error('Method not implemented.');
//   }
//   findOne(arg0: { were: { name: string } }) {
//     throw new Error('Method not implemented.');
//   }
//   constructor(
//     //*aca traemo  a la entidad categories
//     @InjectRepository(Categories)
//     private readonly categoriesRepository: Repository<Categories>,
//   ) {}
//   //*Esta es un getCategories en servidor
//   async getCategories(): Promise<Categories[]> {
//     return this.categoriesRepository.find();
//   }
//   //*Esta es una promesa para agregar categorias "name" ok
//   async addCategory(name: string): Promise<Categories> {
//     //*Esta  es una variable category , pero que tiene findOne mas where/:name
//     let category = await this.categoriesRepository.findOne({ where: { name } });
//     if (!category) {
//       category = this.categoriesRepository.create({ name });
//       await this.categoriesRepository.save(category);
//     }
//     return category;
//   }
// }

// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Categories } from 'src/entities/categories.entity';
// import { CategoriesReposoitory } from './categories.repository';
// // import { Repository } from 'typeorm';
// import * as data from '../../data.json'

// @Injectable()
// export class CategoriesService {
//   constructor(
//     @InjectRepository(Categories)
//     private readonly categoriesRepository: CategoriesReposoitory,
//   ) {}
//   async seedCategories(): Promise<void> {
//     for (const item of data) {
//       const existingCategory = await this.categoriesRepository.findOne({
//         were: { name: item.category },
//       });
//       if (!existingCategory) {
//         const newCategory = this.categoriesRepository.create({
//           name: item.category,
//         });
//         await this.categoriesRepository.save(newCategory);
//       }
//     }
//   }
// }

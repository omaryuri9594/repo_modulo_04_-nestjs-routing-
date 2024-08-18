import { Module } from '@nestjs/common';
import { ProductController } from './prodcut.controller';
import { ProductService } from './product.server';
import { productosRepository } from './product.repository';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Product } from 'src/entities/products.entity';
// import { Categories } from 'src/entities/categories.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([Product, Categories])],
  providers: [ProductService, productosRepository],
  controllers: [ProductController],
})
export class ProductModule {}

import { Injectable } from '@nestjs/common';
import { productosRepository } from './product.repository';
import { Producto } from './interface.product';
// import * as data from '../../data.json';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Product } from 'src/entities/products.entity';
// import { Repository } from 'typeorm';
// import { Categories } from 'src/entities/categories.entity';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: productosRepository) {}
  async getProductOne(page: number = 1, limit: number = 5) {
    return this.productRepository.getProductPage(page, limit);
  }

  async getProduct() {
    const miDataBaseProduct = await this.productRepository.getProduct();
    const product = [...miDataBaseProduct];
    return product;
  }

  // constructor(
  //   @InjectRepository(Product)
  //   private readonly productosRepository: Repository<Product>,
  //   @InjectRepository(Categories)
  //   private readonly categoriesRepository: Repository<Categories>,
  // ) {}
  // async seedProducts(): Promise<void> {
  //   for (const item of data) {
  //     const category = await this.categoriesRepository.findOne({
  //       where: { name: item.category },
  //     });
  //     if (category) {
  //       const existingProduct = await this.productosRepository.findOne({
  //         where: { name: item.name },
  //       });
  //       if (!existingProduct) {
  //         const newProduct = this.productosRepository.create({
  //           name: item.name,
  //           description: item.description,
  //           price: item.price,
  //           stock: item.stock,
  //           category: category,
  //         });
  //         await this.productosRepository.save(newProduct);
  //       }
  //     }
  //   }
  // }
  // async getProducts(): Promise<Product[]> {
  //   return this.productosRepository.find();
  // }
  // async addProduct(productData: Partial<Product>): Promise<Product> {
  //   const newProduct = this.productosRepository.create(productData);
  //   return this.productosRepository.save(newProduct);
  // }

  getId(id: number) {
    return this.productRepository.getById(id);
  }
  creadoBody(user: Producto) {
    return this.productRepository.crearProducto(user);
  }
  updateProduct(id: number, user: Partial<Producto>): Promise<Producto> {
    return this.productRepository.updateProduct(id, user);
  }
  deleteProduct(id: number) {
    return this.productRepository.deleteProduct(id);
  }
}

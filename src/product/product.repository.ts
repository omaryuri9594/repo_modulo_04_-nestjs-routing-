import { Injectable } from '@nestjs/common';
import { Producto } from './interface.product';
import { Use } from 'src/users/Interface.user';
import { error } from 'console';

@Injectable()
export class productosRepository {
  private product = [
    {
      id: 1,
      mame: 'taza',
      description: 'glass color whater',
      price: 27,
      stock: true,
    },
    {
      id: 2,
      mame: 'auricular',
      description: 'jbl',
      price: 50,
      stock: true,
    },
    {
      id: 3,
      mame: 'mause',
      description: 'mx logitech',
      price: 100,
      stock: false,
    },
    {
      id: 4,
      mame: 'gel',
      description: 'disenfectante',
      price: 1,
      stock: true,
    },
  ];

  async getProductPage(page: number = 1, limit: number = 5) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginateProduct = this.product.slice(startIndex, endIndex);
    return paginateProduct;
  }

  async getProduct() {
    return this.product;
  }
  getById(id: number) {
    return this.product.find((user) => user.id === id);
  }
  async crearProducto(user: Producto) {
    //*crear un nuevo id basado en la longitud actual de array
    const id = this.product.length + 1;
    //*crear un nuevo array que incluya todos los 'product' mas el nuevo 'prouduct'
    this.product = [...this.product, { id, ...user }];
    //*retornar el nuevo 'product' creado
    return { id, ...user };
  }
  async updateProduct(id: number, user: Partial<Producto>): Promise<Producto> {
    const usarIndice = this.product.findIndex((user) => user.id === id);
    if (usarIndice === -1) {
      return null;
    }
    this.product[usarIndice] = {
      ...this.product[usarIndice],
      ...user,
    };
    return this.product[usarIndice];
  }
  //*Aplicando metodo delete
  async deleteProduct(id: number): Promise<void> {
    const productIndex = this.product.findIndex((user) => user.id === id);
    if (productIndex === -1) {
      throw new Error('product no encontrado');
    }
    this.product.splice(productIndex, 1);
  }
}

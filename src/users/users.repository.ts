import { Injectable } from '@nestjs/common';
import { Use } from './Interface.user';

@Injectable()
export class UserRepository {
  private users: Use[] = [
    {
      id: 1,
      email: 'omaryuri6878@gmail.com',
      name: 'Omar',
      password: 'omar1122726878',
      address: 'raul lloberas',
      phone: '1122726878',
      country: 'Argentina',
      city: 'buenos aires',
    },
    {
      id: 2,
      email: 'carlos@gmail.com',
      name: 'Carlos',
      password: 'omar112272687',
      address: 'raul lloberas',
      phone: '1122726878',
      country: 'Argentina',
      city: 'buenos aires',
    },
    {
      id: 3,
      email: 'Cladis@gmail.com',
      name: 'Cladis',
      password: 'omar11227268',
      address: 'raul lloberas',
      phone: '1122726878',
      country: 'Argentina',
      city: 'buenos aires',
    },
    {
      id: 4,
      email: 'fernado@gmail.com',
      name: 'Fernado',
      password: 'omar1122726',
      address: 'raul lloberas',
      phone: '1122726878',
      country: 'Argentina',
      city: 'buenos aires',
    },
  ];
  //*paginaciojn
  async getUserPage(page: number = 1, limit: number = 5) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginateUser = this.users.slice(startIndex, endIndex);
    return paginateUser;
  }

  async getUser() {
    return this.users;
  }

  getUserId(id: number) {
    return this.users.find((user) => user.id === id);
  }

  async creaUser(user: Use) {
    //*Crear un nuevo id basado en la longitud actual de array
    const id = this.users.length + 1;
    //* crear un nuevo array que incluya todos los 'users' mas el nuev 'user'
    this.users = [...this.users, { id, ...user }];
    //*retornar  el nuevo 'users creado'
    return { id, ...user };
  }
  async actualizarUser(id: number, user: Partial<Use>): Promise<Use> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }
    this.users[userIndex] = { ...this.users[userIndex], ...user };
    return this.users[userIndex];
  }
  //* el mettodo Delete se utiliza para eliminar un recurso existente. En este caso, eliminaresmos un usuario por su ID

  async deleteusers(id: number): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error('user no encontrado');
    }
    this.users.splice(userIndex, 1);
  }
  async findUserByEmail(email: string): Promise<Use | undefined> {
    return this.users.find((user) => user.email === email);
  }
}

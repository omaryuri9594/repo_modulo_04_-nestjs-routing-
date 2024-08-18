import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { Use } from './Interface.user';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}
  async getUserPageOne(page: number = 1, limit: number = 5) {
    return this.usersRepository.getUserPage(page, limit);
  }
  //* casi todo lo injectables son de tipo async
  async getUser() {
    const dataBaseUser = await this.usersRepository.getUser();
    const users = [...dataBaseUser];
    return users;
  }


  getUserById(id: number) {
    return this.usersRepository.getUserId(id);
  }

  crearUsers(user: Use) {
    return this.usersRepository.creaUser(user);
  }
  actualizarUser(id: number, user: Partial<Use>): Promise<Use> {
    return this.usersRepository.actualizarUser(id, user);
  }

  deleteUser(id: number): Promise<void> {
    return this.usersRepository.deleteusers(id);
  }
}

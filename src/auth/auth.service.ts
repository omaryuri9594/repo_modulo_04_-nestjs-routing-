import { Inject, Injectable } from '@nestjs/common';
import { Use } from 'src/users/Interface.user';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  private activateSession: { [key: string]: Use } = {};

  getAuthChico() {
    return 'este estring estoy creando desde mi servicio auth';
  }

  login(user: Use) {
    //*Aca generamos un token simple usando crypto
    const token = crypto.randomBytes(16).toString('hex');

    //* Almacenar la sesion en memoria
    this.activateSession[token] = user;
    return {
      message: 'Lohin successfull',
      userId: user.id,
      token: token,
      // Añade aquí el token si lo implementas
    };
  }
  validateToken(token: string): Use | null {
    return this.activateSession[token] || null;
  }
  logout(token: string) {
    delete this.activateSession[token];
  }
}
// DEMO:
// @Injectable()
// expoirt calss TodosService{

// cosntructor(private todosRepository: TodosRepository, @Inject('acceso_token') private accessToken:string){}// recuera que esta tu token tien que coincidir con '' anterios
// getTodos(){
// return this.accessToken ==='ESTA ES MI CALVE SECRETA'?
// this.todosRepository.getTodo():'No tiene accesso a esta informacion;'

// }

import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const autHeader = request.headers['authorization'];
    // console.log('Authorization Header:', autHeader);
    if (!autHeader) {
      throw new UnauthorizedException('Falta la cabezera de autorizacion');
    }
    //* Verificar que header tenga la estructura correcta
    const [authType, credentials] = autHeader.split(' ');
    // console.log('Auth Type:', authType);
    // console.log('Credentials:', credentials);
    if (authType !== 'Basic' || !credentials) {
      throw new UnauthorizedException(
        'Autorization header must be the format:Basic:<email>:<password>',
      );
    }
    //* verificar que contengan tanto email como passwords
    const [email, password] = credentials.split(':');
    console.log('Email:', email);
    console.log('Password:', password);
    if (!email || !password) {
      throw new UnauthorizedException(
        'El encabezado de autorizacion debe contener email y password : Authorization header must contain both email and password',
      );
    }
    //*Esta permite el acceso se le header es valido
    return true;
  }
}

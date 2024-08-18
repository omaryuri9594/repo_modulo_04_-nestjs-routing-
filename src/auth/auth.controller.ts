import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRepository } from 'src/users/users.repository';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserRepository,
  ) {}

  @Get()
  getAuth() {
    return this.authService.getAuthChico();
  }

  @HttpCode(200)
  @Post('login')
  async loginIn(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    if (!email || !password) {
      throw new BadRequestException(
        'Email and password are required, | se requiere email y contrasena.',
      );
    }
    const user = await this.userRepository.findUserByEmail(email);
    if (!user || user.password !== password) {
      throw new BadRequestException('Email or passwoard incorrecto!');
    }
    return this.authService.login(user);
  }
  @HttpCode(200)
  @Post('logout')
  async logout(@Body('token') token: string) {
    this.authService.logout(token);
    return {
      message: 'logiut successfull',
    };
  }
}

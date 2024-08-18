import {
  Get,
  Controller,
  Post,
  Put,
  Delete,
  HttpCode,
  Param,
  UseInterceptors,
  Body,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './suser.service';
import { OmitirPassword } from 'src/interceptor/interceptor';
import { Use } from './Interface.user';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('users')
@UseInterceptors(OmitirPassword)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  @UseGuards(AuthGuard)
  gethelloDos() {
    return this.usersService.getUser();
  }

  @Get()
  @UseGuards(AuthGuard)
  recibirLosDos(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 5,
  ) {
    return this.usersService.getUserPageOne(Number(page), Number(limit));
  }

  @HttpCode(200)
  @Get(':id')
  @UseGuards(AuthGuard)
  extrtaerId(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }
  @HttpCode(201)
  @Post()
  userPost(@Body() user: Use) {
    return this.usersService.crearUsers(user);
  }
  @HttpCode(200)
  @Put(':id')
  @UseGuards(AuthGuard)
  actualizarUser(@Param('id') id: number, @Body() user: Partial<Use>) {
    return this.usersService.actualizarUser(Number(id), user);
  }
  // @Delete(':id')
  // userDelete(@Param('id') id: number) {
  //   return this.usersService.deleteUser(id);
  // }
  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(Number(id));
  }
}

// @Delete(':id')
// @UseGuards(AuthGuard)
// deleteProduct(@Param('id') id: string) {
//   return this.productService.deleteProduct(Number(id));

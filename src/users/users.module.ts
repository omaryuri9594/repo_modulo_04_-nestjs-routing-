import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './suser.service';
import { UserRepository } from './users.repository';

@Module({
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
})
export class UsersModule {}

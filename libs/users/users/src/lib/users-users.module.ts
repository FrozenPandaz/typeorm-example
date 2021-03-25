import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  controllers: [],
  providers: [UserResolver, UserService],
  exports: [],
})
export class UsersUsersModule {}

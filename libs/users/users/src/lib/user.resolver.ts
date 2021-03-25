import {  Query, Resolver } from '@nestjs/graphql';

import { UserService } from './user.service';
import { User } from './user.entity';


@Resolver(of => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(returns => User)
  getUser(): User {
    return this.userService.getData();
  }
}

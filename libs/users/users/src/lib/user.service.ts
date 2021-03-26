import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  getData(): User {
    return { id: 0, name: 'Bob Smith' };
  }
}

import { Module } from '@nestjs/common';

import { join } from 'path';

import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersUsersModule } from '@typeorm-test/users/users';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(__dirname, '../../apps/api','src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 4444,
    }),
    UsersUsersModule
  ],
  providers: [],
})
export class AppModule {}

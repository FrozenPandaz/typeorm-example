import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text')
  name: string;
}

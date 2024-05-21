import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private Users: User[] = []

  constructor() { }


  create(createUserDto: CreateUserDto) {
    const user = new User(createUserDto, uuid())

    this.Users.push(user)

    return user
  }

  findAll() {
    return this.Users
  }

  findOne(id: string) {
    const user = this.Users.find((user) => user.id === id)

    if (!user)
      throw new NotFoundException(`Not foun user with id ${id}`)

    return user
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    const oldUser = this.findOne(id)

    this.Users = this.Users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUserDto
        }
      }
    })


    return { ...oldUser, ...updateUserDto }
  }

  remove(id: string) {
    this.Users = this.Users.filter(user => user.id !== id)

    return this.Users
  }
}

import { CreateUserDto } from "../dto"
import { EUserStatus } from "../enums"

export class User {
  constructor(createUserDto: CreateUserDto, id: string) {
    this.id = id
    this.name = createUserDto.name
    this.lastName = createUserDto.lastName
    this.email = createUserDto.email
    this.password = createUserDto.password
  }

  id: string

  name: string

  lastName: string

  email: string

  password: string

  status: EUserStatus = EUserStatus.ACTIVE
}

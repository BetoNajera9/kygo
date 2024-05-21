import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, Min } from "class-validator"

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  lastName: string

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsStrongPassword()
  @IsNotEmpty()
  @IsString()
  password: string
}

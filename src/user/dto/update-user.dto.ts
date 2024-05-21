import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { EUserStatus } from '../enums';
import { IsEnum, IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsEnum(EUserStatus)
  @IsOptional()
  status?: EUserStatus
}

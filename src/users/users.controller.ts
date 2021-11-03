import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Get,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { ReturnUserDto } from './dtos/return-user.dto';
import { FindUsersQueryDto } from './dtos/find-users-query.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createAdminUser(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {
    const user = await this.usersService.createAdminUser(createUserDto);

    return { user, message: 'Administrator successfully registered' };
  }

  @Get()
  async findUsersByQuery(@Query() query: FindUsersQueryDto) {
    const found = await this.usersService.findUsersByQuery(query);

    return {
      found,
      message: 'Users found',
    };
  }
}

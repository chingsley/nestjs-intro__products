import { Controller, Post, Body, Get, Param, Patch, Delete, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  // @Post('register')
  @Post()
  async createNewUser (
    @Body() body: User,
    @Body('firstName') fName: string,
    @Body('lastName') lName: string,
    @Body('isActive') isActive: boolean,
  ): Promise<User> {
    console.log(body);
    const user = await  this.usersService.create(fName, lName, isActive);
    return user;
  }

  // @Get()
  // async getAllUsers(@Req)
}

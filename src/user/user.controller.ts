import { Controller, Get, Param, Patch, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUser() {
    const result = await this.userService.getAllUsers();
    return result;
  }

  @Get(':id')
  async getSingleUser(@Param('id') id: string) {
    const result = await this.userService.getSingleUser(id);
    return {
      message: 'Single user fetched successfully..',
      data: result,
    };
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() data: Partial<User>) {
    // console.log({id, data});

    const result = await this.userService.updateUser(id, data);
    return {
      message: 'User updated successfully...',
      data:result
    };
  }
}

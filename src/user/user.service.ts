import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import prisma from 'src/utils/prisma';

@Injectable()
export class UserService {
  async getAllUsers() {
    const result = await prisma.user.findMany();
    return result;
  }

  async getSingleUser(id: string) {
    const result = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return result;
  }

  async updateUser(id: string, data: Partial<User>) {
    const findUser = await prisma.user.findFirst({ where: { id } });
    if (!findUser) {
      throw new Error('User not found!');
    }

    return await prisma.user.update({
      where: { id },
      data: data,
    });
  }
}

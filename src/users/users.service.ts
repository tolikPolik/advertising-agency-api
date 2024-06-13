import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { User } from 'src/dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async onModuleInit() {
    console.log(await this.databaseService.user.findMany());
    if (await this.findOne('qwe')) return;
    await this.databaseService.user.create({
      data: {
        login: 'qwe',
        passwordCash: 'ewq',
        role: 'admin',
      },
    });
    console.log(await this.databaseService.user.count());
  }

  async findOne(login: string): Promise<User> {
    return (await this.databaseService.user.findFirst({
      where: {
        login: login,
      },
    })) as User;
  }

  async add(user: User) {
    await this.databaseService.user.create({
      data: {
        login: user.login,
        passwordCash: user.passwordCash,
        role: user.role,
      },
    });
  }

  async update(user: User) {
    await this.databaseService.user.update({
      where: { id: user.id },
      data: {
        login: user.login,
        passwordCash: user.passwordCash,
        role: user.role,
      },
    });
  }
}

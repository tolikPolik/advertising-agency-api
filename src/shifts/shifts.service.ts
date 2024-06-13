import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Shift } from 'src/dto/posts/shift.dto';

@Injectable()
export class ShiftsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getFromPost(postId: number): Promise<Shift[]> {
    return (await this.databaseService.shift.findMany({
      where: {
        postId,
      },
    })) as Shift[];
  }

  async add(shift: Shift) {
    await this.databaseService.shift.create({
      data: {
        postId: shift.postId,
        isOpen: shift.isOpen,
        description: shift.description,
        image: shift.image,
      },
    });
  }

  async deleteAll(postId: number) {
    await this.databaseService.shift.deleteMany({
      where: {
        postId,
      },
    });
  }
}

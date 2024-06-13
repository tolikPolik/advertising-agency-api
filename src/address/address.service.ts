import { Injectable } from '@nestjs/common';
// import { DatabaseService } from 'src/database/database.service';
// import { Address } from 'src/dto/posts/address.dto';

@Injectable()
export class AddressService {
  // constructor(private readonly databaseService: DatabaseService) {}
  // async getAll(): Promise<Address[]> {
  //   return (await this.databaseService.address.findMany()) as Address[];
  // }
  // async getOne(id: number): Promise<Address> {
  //   return await this.databaseService.address.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  // }
  // async add(content: string) {
  //   await this.databaseService.address.create({
  //     data: {
  //       content,
  //     },
  //   });
  // }
  // async remove(id: number) {
  //   await this.databaseService.address.delete({
  //     where: {
  //       id,
  //     },
  //   });
  // }
}

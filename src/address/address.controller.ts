import { /*Body,*/ Controller /*Get, Param, Post*/ } from '@nestjs/common';
//import { AddressService } from './address.service';
//import { Address } from 'src/dto/posts/address.dto';

@Controller('address')
export class AddressController {
  // constructor(private readonly addressService: AddressService) {}
  // @Get()
  // async GetAll(): Promise<Address[]> {
  //   return await this.addressService.getAll();
  // }
  // @Post('/:name')
  // async Add(@Param('name') name: string) {
  //   await this.addressService.add(name);
  // }
}

import { Injectable } from '@nestjs/common';
//import { AddressService } from 'src/address/address.service';
import { DatabaseService } from 'src/database/database.service';
import { Post } from 'src/dto/posts/post.dto';
import { ShiftsService } from 'src/shifts/shifts.service';
// import { Address } from 'src/dto/posts/address.dto';
import { Shift } from 'src/dto/posts/shift.dto';

@Injectable()
export class PostsService {
  constructor(
    private readonly databaseService: DatabaseService,
    //private readonly addressService: AddressService,
    private readonly shiftsService: ShiftsService,
  ) {}

  async getAll(): Promise<Post[]> {
    const rawPosts = await this.databaseService.post.findMany();
    const fixedPosts = rawPosts.map(
      (rawPost) =>
        new Post({
          id: rawPost.id,
          createdAt: rawPost.createdAt,
          userId: rawPost.userId,
          address: rawPost.adress,
        }),
    );
    return fixedPosts;
  }

  // getAllSync(): Post[] {
  //   let rawPosts;
  //   this.databaseService.post.findMany().then((x) => {
  //     console.log(x);
  //     rawPosts = x;
  //   });
  //   console.log(rawPosts);
  //   return null;
  // }

  // async getPost(post: Post): Promise<Post> {
  //   const shifts: Shift[] = await this.shiftsService.getFromPost(post.id);
  //   return {
  //     id: post.id,
  //     createdAt: post.createdAt,
  //     userId: post.userId,
  //     shifts,
  //     address: post.address,
  //   } as Post;
  // }

  async getById(id: number): Promise<Post> {
    const rawPost = await this.databaseService.post.findUnique({
      where: {
        id,
      },
    });
    const shifts: Shift[] = await this.shiftsService.getFromPost(rawPost.id);
    // const adress: Address = await this.addressService.getOne(rawPost.adressId);
    return {
      id: rawPost.id,
      userId: rawPost.userId,
      shifts,
      address: rawPost.adress,
    } as Post;
  }

  async add(post: Post): Promise<number> {
    const data = await this.databaseService.post.create({
      data: {
        userId: post.userId,
        adress: post.address,
      },
    });
    return await data.id;
  }

  async addShift(id: number, shift: Shift) {
    shift.postId = id;
    await this.shiftsService.add(shift);
  }

  async deletePostWithShifts(id: number) {
    await this.shiftsService.deleteAll(id);
    await this.databaseService.post.delete({
      where: {
        id,
      },
    });
  }
}

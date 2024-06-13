import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post as PostNest,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from 'src/dto/posts/post.dto';
import { Shift } from 'src/dto/posts/shift.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async get(): Promise<Post[]> {
    return await this.postsService.getAll();
  }

  // @Get('/s')
  // getSync(): Post[] {
  //   return this.postsService.getAllSync();
  // }

  @Get('/:id')
  async getById(@Param('id', ParseIntPipe) id: number): Promise<Post> {
    return await this.postsService.getById(id);
  }

  @PostNest()
  async add(@Body() postDto: Post): Promise<number> {
    return await this.postsService.add(postDto);
  }

  @Delete('/:id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.postsService.deletePostWithShifts(id);
  }

  @PostNest('/:id')
  async addShift(
    @Param('id', ParseIntPipe) id: number,
    @Body() shiftDto: Shift,
  ) {
    await this.postsService.addShift(id, shiftDto);
  }
}

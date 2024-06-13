import { Shift } from './shift.dto';

export class Post {
  constructor(post: Post) {
    const { id, createdAt, userId, address } = post;
    this.id = id;
    this.createdAt = createdAt;
    this.userId = userId;
    this.address = address;
  }

  id?: number;
  createdAt?: Date;
  userId: number;
  shifts?: Shift[];
  address: string;
}

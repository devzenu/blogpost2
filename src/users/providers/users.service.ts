import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/create-user.param.dto';
import { Model } from 'mongoose';
import { User } from '../user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    /**
     * Injecting User Module
     */
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return await newUser.save();
  }
  /**
   * The method to get all the users from the database
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'jhon',
        email: 'john@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }

  /**
   * Find a single user using the ID of the user
   */

  public findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'Alice',
      email: 'alice@doe.com',
    };
  }
}

import { Inject, Injectable } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
// @Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  getAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }
  createUser(createUserDto : CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }
  updateUser(updateUserDto: UpdateUserDto, userId: number) {
    return this.userRepository.update(userId , updateUserDto)
  }
  getUserById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  getUserByemail(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({ email });
  }


  deleteUserById(id: number) {
     this.userRepository.delete(id);
     return `User Deleted at ${id}`
  }
}
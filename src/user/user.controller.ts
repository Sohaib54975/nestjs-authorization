import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.getAllUser();
  }

  @Post()
  createUser(@Body() body: any) {
    return this.userService.createUser(body);
  }

  @Patch("/:userId")
  updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param("userId", ParseIntPipe) userId: number,
  ) {
    return this.userService.updateUser(updateUserDto, userId);
  }

  @Get("/:id")
  getUserById(@Param('id' , ParseIntPipe ) id: number) {
    return this.userService.getUserById(id);
  }

  @Delete("/:id")
  deleteUserBy(@Param('id' , ParseIntPipe ) id: number,) {
    return this.userService.deleteUserById(id);
  }
}

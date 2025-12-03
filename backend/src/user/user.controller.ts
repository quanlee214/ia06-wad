import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('user/register')
  async register(@Body() data: CreateUserDto) {
    return this.userService.create(data);
  }

  @Post('user/me')
  async me(@Body() body: { id: number }) {
    return this.userService.findById(body.id);
  }
}
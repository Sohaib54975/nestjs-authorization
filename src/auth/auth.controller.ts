import { Body, Controller,Request, Post, UseGuards } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post()
  async login(@Request() req:any) {
    console.log("user - user - user " , req.user);
    
   return this.authService.login(req.user)
  }
}

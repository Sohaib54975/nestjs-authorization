import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: "email" });
  }
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateuser(email, password);
    if (user) {
      return user;
    } else {
      throw new UnauthorizedException();
    }
  }
}

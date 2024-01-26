  import { Module } from "@nestjs/common";
  import { AuthController } from "./auth.controller";
  import { AuthService } from "./auth.service";
  import { UserModule } from "src/user/user.module";
  import { LocalStrategy } from "./local.strategy";
  import { PassportModule } from "@nestjs/passport";
  import { JwtModule } from "@nestjs/jwt";
  import { jwtConstants } from "./auth.contants";
  import { JwtStrategy } from "./jwt.strategy";

  @Module({
    controllers: [AuthController],
    imports: [
      UserModule,
      PassportModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: "60s" },
      }),
    ],
    providers: [AuthService, JwtStrategy , LocalStrategy],
    exports:[AuthService]
  })
  export class AuthModule {}

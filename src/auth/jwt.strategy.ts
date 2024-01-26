import { PassportStrategy } from "@nestjs/passport"
import { ExtractJwt } from "passport-jwt"
import { Strategy } from "passport-jwt"
import { jwtConstants } from "./auth.contants"
import { Injectable } from "@nestjs/common"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    
    constructor(){
        console.log("jwtConstants.secret:in jwt srategy", jwtConstants.secret);
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey:jwtConstants.secret
        })
        console.log("toeknnnn",{"jwtConstants.secret":jwtConstants.secret})
    }

    async validate(payload: any) {
        return { id: payload.sub, email: payload.email }
    }
}
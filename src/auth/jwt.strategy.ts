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
    }

    async validate(payload: any) {
        console.log("validate - validate" , payload);
        
        return { id: payload.sub, email: payload.email }
    }
}
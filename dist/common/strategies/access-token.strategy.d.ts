import { Strategy } from 'passport-jwt';
import { JwtPayload } from "../../users/types";
declare const AccessTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class AccessTokenStrategy extends AccessTokenStrategy_base {
    constructor();
    validate(req: Request, payload: JwtPayload): JwtPayload;
}
export {};

import type { StrategyVerifyCallback } from "remix-auth";
import { OAuth2Profile, OAuth2Strategy, OAuth2StrategyVerifyParams } from "remix-auth-oauth2";
export interface AppleStrategyOptions {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    scope: string;
}
export interface AppleExtraParams extends Record<string, string | number> {
    id_token: string;
    expires_in: 3600;
    token_type: "Bearer";
}
export declare type AppleProfile = OAuth2Profile;
export declare class AppleStrategy<User> extends OAuth2Strategy<User, AppleProfile, AppleExtraParams> {
    name: string;
    constructor(options: AppleStrategyOptions, verify: StrategyVerifyCallback<User, OAuth2StrategyVerifyParams<AppleProfile, AppleExtraParams>>);
    protected userProfile(): Promise<AppleProfile>;
    protected authorizationParams(): URLSearchParams;
}

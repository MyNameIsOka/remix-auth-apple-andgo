"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppleStrategy = void 0;
// We need to import the OAuth2Strategy, the verify callback and the profile interfaces
const remix_auth_oauth2_andgo_1 = require("remix-auth-oauth2-andgo");
// And we create our strategy extending the OAuth2Strategy, we also need to
// pass the User as we did on the FormStrategy, we pass the Auth0Profile and the
// extra params
class AppleStrategy extends remix_auth_oauth2_andgo_1.OAuth2Strategy {
    // We receive our custom options and our verify callback
    constructor(options, verify) {
        // And we pass the options to the super constructor using our own options
        // to generate them, this was we can ask less configuration to the developer
        // using our strategy
        super({
            authorizationURL: `https://appleid.apple.com/auth/authorize`,
            tokenURL: `https://appleid.apple.com/auth/token`,
            clientID: options.clientID,
            clientSecret: options.clientSecret,
            callbackURL: options.callbackURL,
            scope: options.scope,
        }, verify);
        // The OAuth2Strategy already has a name but we can override it
        this.name = "apple";
    }
    async userProfile() {
        return { provider: "apple" };
    }
    // We override the protected authorizationParams method to return a new
    // URLSearchParams with custom params we want to send to the authorizationURL.
    // Here we add the scope so Auth0 can use it, you can pass any extra param
    // you need to send to the authorizationURL here base on your provider.
    authorizationParams() {
        return new URLSearchParams({
            response_mode: "query",
        });
    }
}
exports.AppleStrategy = AppleStrategy;

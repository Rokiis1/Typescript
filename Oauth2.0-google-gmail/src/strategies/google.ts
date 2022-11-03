import passport from "passport";
import {
  Profile,
  Strategy as GoogleStartegy,
  VerifyCallback,
} from "passport-google-oauth20";

passport.use(
  new GoogleStartegy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_REDIRECT_URL,
      scope: ["email", "profile"],
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      console.log(accessToken);
      console.log(refreshToken);
      done(null, profile);
    }
  )
);

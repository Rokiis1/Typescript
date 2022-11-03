import { config } from "dotenv";
import passport from "passport";
import express from "express";
import authRoutes from "./routes/authRoutes";

config();
require("./strategies/google");

async function bootstrap() {
  const app = express();
  const PORT: string | undefined = process.env.PORT;

  app.use(passport.initialize());

  app.use("/api/v1/auth", authRoutes);

  try {
    app.listen(PORT, () => {
      console.log(`Google-auth2.0 listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();

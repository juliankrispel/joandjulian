import { JWT } from "google-auth-library";
import keyjson from "../../joandjulian-0761ab687054.json";

export const jwtClient = () => new JWT({
  // env var values here are copied from service account credentials generated by google
  // see "Authentication" section in docs for more info
  email: keyjson.client_email,
  key: keyjson.private_key,
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
  ],
});
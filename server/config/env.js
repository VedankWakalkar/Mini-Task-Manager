import { config } from "dotenv";
import path from "path";

config({ path: path.resolve(process.cwd(), '.env') });

export const { DATABASE_URL, PORT } = process.env;
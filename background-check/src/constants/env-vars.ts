import dotenv from 'dotenv';

dotenv.config();

export default {
    PORT: process.env.PORT ?? "",
    DATABASE_URL: process.env.DATABASE_URL ?? "",
    OPENAI_API_KEY: process.env.OPENAI_API_KEY ?? "",
    WIKI_API_URL: process.env.WIKI_API_URL ?? "",
} as const;
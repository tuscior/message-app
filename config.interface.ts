import { MaxValueFn } from "express-rate-limit";
export interface configInterface {
    DB_URL: string,
    PORT: number | string,
    VERSION: string,
    REQUEST_LIMIT: number | MaxValueFn
}

import { environment } from "environments/environment.prod";

/* eslint-disable @typescript-eslint/naming-convention */
export class Config {
    static API_URL = environment.API_URL;
}

import { ParamsDTO } from "../dtos/mod.ts";
import { jsonResponse } from "../utils/mod.ts";

export const infoRoute = async (_request: Request, _params: ParamsDTO) => {
    const denoVersion = Deno.version;
    console.log("Current Deno version", Deno.version);
    const body = {
        denoVersion: denoVersion
    }
    return jsonResponse({ body, status: 200 });
}
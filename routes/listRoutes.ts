import { router } from "../config/mod.ts";
import { jsonResponse } from "../utils/mod.ts";
import { ParamsDTO } from "../dtos/mod.ts";

export const listRoutes = async (_req: Request, _params: ParamsDTO) => {
  return jsonResponse({ body: router.listAll(), status: 200 });
};

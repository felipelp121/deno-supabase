import { ParamsDTO } from "../dtos/mod.ts";
import { jsonResponse } from "../utils/mod.ts";

export const testRoute = async (_request: Request, _params: ParamsDTO) => {
  return jsonResponse({ body: "TEST ROUTE", status: 200 });
};

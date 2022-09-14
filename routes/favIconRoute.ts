import { ParamsDTO } from "../dtos/mod.ts";

export const favIconRoute = async (_request: Request, _params: ParamsDTO) => {
  return new Response(null, {
    status: 301,
    headers: {
      "Content-Type": "image/x-icon",
      "Cache-Control": "public, max-age=15552000",
    },
  });
};
